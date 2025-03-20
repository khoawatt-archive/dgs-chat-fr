"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "./(auth)/login/components/LoginForm"
import { SignUpForm } from "./(auth)/signup/components/SignUpForm"


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  // const handleLoginSuccess = () => {
  //   setIsLoggedIn(true)
  // }

  // if (isLoggedIn) {
  //   return <ChatLayout />
  // }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      {/* Header with dark mode toggle */}
      <header className="w-full p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold dark:text-white">Chat App</h1>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-gray-900">
        {/* Left side - App info */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white">Connect and Chat in Real-Time</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our secure messaging platform lets you stay connected with friends, family, and colleagues from anywhere in
            the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard
              title="Secure Messaging"
              description="End-to-end encryption keeps your conversations private and secure."
            />
            <FeatureCard
              title="Real-Time Chat"
              description="Instant messaging with real-time delivery and read receipts."
            />
            <FeatureCard
              title="File Sharing"
              description="Easily share documents, photos, and videos with your contacts."
            />
            <FeatureCard title="Cross-Platform" description="Access your chats from any device, anywhere, anytime." />
          </div>
        </div>

        {/* Right side - Auth forms */}
        <div className="w-full md:w-1/2 max-w-md">
          <Card className="p-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              <TabsContent value="signup">
                <SignUpForm />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-center text-gray-500 dark:text-gray-400">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Chat App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

