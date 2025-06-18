"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Terminal, Coffee, Calendar, User, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
)

export default function ChaiShaiPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  // Get next Sunday dates for the date picker
  const getNextSundays = () => {
    const sundays = []
    const today = new Date()

    for (let i = 0; i < 8; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      if (date.getDay() === 0) {
        // Sunday is 0
        sundays.push(date.toISOString().split("T")[0])
      }
    }

    // If no Sundays found in next 8 days, get the next Sunday
    if (sundays.length === 0) {
      const nextSunday = new Date(today)
      const daysUntilSunday = 7 - today.getDay()
      nextSunday.setDate(today.getDate() + daysUntilSunday)
      sundays.push(nextSunday.toISOString().split("T")[0])
    }

    return sundays
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      // Verify the selected date is a Sunday
      const selectedDate = new Date(formData.date)
      if (selectedDate.getDay() !== 0) {
        setMessage("ERROR: INVALID DATE - CHAI SESSIONS ONLY ON SUNDAYS!")
        setIsSubmitting(false)
        return
      }

      const { data, error } = await supabase.from("chai_bookings").insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          booking_date: formData.date,
          created_at: new Date().toISOString(),
        },
      ])

      if (error) {
        console.error("Supabase error:", error)
        setMessage("ERROR: BOOKING FAILED - SYSTEM MALFUNCTION!")
      } else {
        setMessage("SUCCESS: CHAI SESSION BOOKED! SEE YOU ON SUNDAY!")
        setFormData({ name: "", phone: "", email: "", date: "" })
      }
    } catch (error) {
      console.error("Booking error:", error)
      setMessage("ERROR: CONNECTION FAILED - TRY AGAIN LATER!")
    }

    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <div className="border-b-2 border-green-400 p-4">
        <div className="flex items-center gap-2 text-xl">
          <Terminal className="h-6 w-6" />
          <span className="text-cyan-400">CHAI_SHAI.EXE</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>

      <div className="container mx-auto p-6 max-w-4xl">
        {/* Navigation */}
        <nav className="mb-8 p-4 border border-green-400 bg-green-400/10">
          <div className="flex gap-6">
            <Link href="/" className="text-cyan-400 hover:text-white transition-colors">
              [1] MAIN.SYS
            </Link>
            <Link href="/chai-shai" className="text-magenta-400 hover:text-white transition-colors">
              [2] CHAI.EXE
            </Link>
          </div>
        </nav>

        {/* Chai Shai Header */}
        <section className="mb-8 p-4 border border-magenta-400 bg-magenta-400/10">
          <h1 className="text-3xl text-magenta-400 mb-4 flex items-center gap-2">
            <Coffee className="h-8 w-8" />
            CHAI_SHAI.SYS
          </h1>
          <div className="text-green-300 space-y-2">
            <p>{">"} INITIALIZING CHAI PROTOCOL...</p>
            <p>{">"} SUNDAY SESSIONS ONLY</p>
            <p>{">"} LOCATION: MY_OFFICE.TERMINAL</p>
            <p>{">"} DURATION: 1 HOUR</p>
            <p className="text-yellow-400">{">"} STATUS: ACCEPTING BOOKINGS</p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="mb-8 p-6 border border-cyan-400 bg-cyan-400/5">
          <h2 className="text-2xl text-cyan-400 mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            BOOKING_FORM.DAT
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-green-400 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  NAME:
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-black border-green-400 text-green-400 font-mono focus:border-cyan-400"
                  placeholder="ENTER_YOUR_NAME"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-green-400 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  PHONE:
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-black border-green-400 text-green-400 font-mono focus:border-cyan-400"
                  placeholder="XXX-XXX-XXXX"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-green-400 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  EMAIL:
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-black border-green-400 text-green-400 font-mono focus:border-cyan-400"
                  placeholder="USER@DOMAIN.COM"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-green-400 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  SUNDAY DATE:
                </Label>
                <select
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="w-full bg-black border border-green-400 text-green-400 font-mono p-2 focus:border-cyan-400 focus:outline-none"
                >
                  <option value="">SELECT_SUNDAY</option>
                  {getNextSundays().map((sunday) => (
                    <option key={sunday} value={sunday}>
                      {new Date(sunday).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-400 text-black hover:bg-cyan-400 font-mono font-bold text-lg py-3"
            >
              {isSubmitting ? "PROCESSING..." : "BOOK_CHAI_SESSION.EXE"}
            </Button>
          </form>

          {/* Status Message */}
          {message && (
            <div
              className={`mt-4 p-3 border font-mono ${
                message.includes("SUCCESS")
                  ? "border-green-400 bg-green-400/20 text-green-400"
                  : "border-red-400 bg-red-400/20 text-red-400"
              }`}
            >
              <p>{message}</p>
            </div>
          )}
        </section>

        {/* Info Section */}
        <section className="mb-8 p-4 border border-yellow-400 bg-yellow-400/5">
          <h3 className="text-yellow-400 font-bold mb-3">CHAI_SESSION.INFO</h3>
          <div className="text-green-300 space-y-1 text-sm">
            <p>{">"} SESSIONS: SUNDAYS ONLY</p>
            <p>{">"} LOCATION: NAGPUR.TERMINAL</p>
            <p>{">"} INCLUDES: FRESH CHAI + TECH DISCUSSIONS</p>
            <p>{">"} TOPICS: PROGRAMMING, FUTURE OF COMPUTING, CAREER ADVICE</p>
            <p>{">"} COST: FREE (JUST BRING YOUR CURIOSITY!)</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-green-400 pt-4">
          <p>CHAI_SYSTEM READY • BOOKINGS STORED IN DATABASE • COPYRIGHT 2025</p>
          <p className="animate-pulse">PRESS ESC TO RETURN TO MAIN MENU...</p>
        </footer>
      </div>
    </div>
  )
}
