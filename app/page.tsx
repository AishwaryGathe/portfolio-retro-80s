import Link from "next/link"
import { Terminal, Zap, Calendar, Code } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <div className="border-b-2 border-green-400 p-4">
        <div className="flex items-center gap-2 text-xl">
          <Terminal className="h-6 w-6" />
          <span className="text-cyan-400">PORTFOLIO.EXE</span>
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

        {/* About Me Section */}
        <section className="mb-8 p-4 border border-green-400 bg-green-400/5">
          <h2 className="text-2xl text-cyan-400 mb-4 flex items-center gap-2">
            <Code className="h-6 w-6" />
            ABOUT_ME.TXT
          </h2>
          <div className="space-y-2 text-green-300">
            <p>{">"} LOADING PERSONAL DATA...</p>
            <p>{">"} NAME: Aishwary Gathe</p>
            <p>{">"} OCCUPATION: Learner</p>
            <p>{">"} LOCATION: Nagpur, Maharashtra, India</p>
            <p>{">"} PASSION: Cyber Security</p>
            <p className="text-yellow-400">{">"} STATUS: READY TO REVOLUTIONIZE COMPUTING!</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-8 p-4 border border-green-400 bg-green-400/5">
          <h2 className="text-2xl text-cyan-400 mb-4 flex items-center gap-2">
            <Zap className="h-6 w-6" />
            PROJECTS.DAT (Under Construction)
          </h2>
          <div className="grid gap-4">
            <div className="border border-yellow-400 p-3 bg-yellow-400/10">
              <h3 className="text-yellow-400 font-bold hover:text-white transition-colors cursor-pointer">
                <a
                  href="https://github.com/alexbyte/inventory-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  INVENTORY_MANAGER.EXE
                  <span className="text-xs">↗</span>
                </a>
              </h3>
              <p className="text-green-300">Database system for local computer store using dBASE III</p>
              <p className="text-gray-400 text-sm">STATUS: DEPLOYED • YEAR: 1985</p>
            </div>
            <div className="border border-magenta-400 p-3 bg-magenta-400/10">
              <h3 className="text-magenta-400 font-bold hover:text-white transition-colors cursor-pointer">
                <a
                  href="https://github.com/alexbyte/arcade-game-basic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  ARCADE_GAME.BAS
                  <span className="text-xs">↗</span>
                </a>
              </h3>
              <p className="text-green-300">Space shooter game written in QuickBASIC</p>
              <p className="text-gray-400 text-sm">STATUS: COMPLETED • YEAR: 1984</p>
            </div>
            <div className="border border-cyan-400 p-3 bg-cyan-400/10">
              <h3 className="text-cyan-400 font-bold hover:text-white transition-colors cursor-pointer">
                <a
                  href="https://github.com/alexbyte/payroll-system-pascal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  PAYROLL_SYSTEM.PAS
                  <span className="text-xs">↗</span>
                </a>
              </h3>
              <p className="text-green-300">Automated payroll calculator in Turbo Pascal</p>
              <p className="text-gray-400 text-sm">STATUS: IN_PROGRESS • YEAR: 1986</p>
            </div>
          </div>
        </section>

        {/* Internship Section */}
        <section className="mb-8 p-4 border border-green-400 bg-green-400/5">
          <h2 className="text-2xl text-cyan-400 mb-4">INTERNSHIP.LOG</h2>
          <div className="border border-blue-400 p-4 bg-blue-400/10">
            <h3 className="text-blue-400 font-bold">Crypto Forensic Technology</h3>
            <p className="text-green-300">Cyber Forensic Expert 2025</p>
            <ul className="text-green-300 mt-2 space-y-1">
              <li>{">"} Cyber Crime Investigation</li>
              <li>{">"} Forensic Tools Expert</li>
              <li>{">"} Learned to right DFIR</li>
              <li>{">"} Real life Cases</li>
            </ul>
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-8 p-4 border border-green-400 bg-green-400/5">
          <h2 className="text-2xl text-cyan-400 mb-4 flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            EVENTS.CAL
          </h2>
          <div className="space-y-3">
            <div className="border border-red-400 p-3 bg-red-400/10">
              <h3 className="text-red-400 font-bold hover:text-white transition-colors cursor-pointer">
                <a
                  href="https://westcoastcomputerfaire.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Cloud Community Day
                  <span className="text-xs">↗</span>
                </a>
              </h3>
              <p className="text-green-300">JUNE 29, 2025 •Nagpur</p>
              <p className="text-gray-400 text-sm">Learn About Cloud Computing</p>
              <p className="text-red-300 text-xs mt-1">{">"} CLICK TO REGISTER</p>
            </div>
            <div className="border border-yellow-400 p-3 bg-yellow-400/10">
              <h3 className="text-yellow-400 font-bold hover:text-white transition-colors cursor-pointer">
                <a
                  href="https://comdex.com/spring86/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  JUG NAGPUR
                  <span className="text-xs">↗</span>
                </a>
              </h3>
              <p className="text-green-300">July 5-8, 2025 • Nagpur</p>
              <p className="text-gray-400 text-sm">Java User Group Nagpur</p>
              <p className="text-yellow-300 text-xs mt-1">{">"} CLICK TO REGISTER</p>
            </div>
            <div className="border border-magenta-400 p-3 bg-magenta-400/10">
              <h3 className="text-magenta-400 font-bold hover:text-white transition-colors cursor-pointer">
                <a
                  href="mailto:usergroup@techcenter.com?subject=Meetup Registration"
                  className="flex items-center gap-2"
                >
                  The_Learners_Den_MEETUP
                  <span className="text-xs">✉</span>
                </a>
              </h3>
              <p className="text-green-300">Every 2nd Thursday • Community Center</p>
              <p className="text-gray-400 text-sm">Sharing code and debugging sessions</p>
              <p className="text-magenta-300 text-xs mt-1">{">"} CLICK TO JOIN VIA EMAIL</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-green-400 pt-4">
          <p>SYSTEM READY • FREE MEMORY: 640K • COPYRIGHT 2025</p>
          <p className="animate-pulse">PRESS ANY KEY TO CONTINUE...</p>
        </footer>
      </div>
    </div>
  )
}
