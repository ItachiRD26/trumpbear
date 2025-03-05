"use client"

import * as React from "react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function SidebarOptInForm() {
  const [email, setEmail] = React.useState("")
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
      {isSubmitted ? (
        <div className="text-center">
          <h3 className="text-sm font-medium text-red-600">Thanks for subscribing!</h3>
          <p className="mt-1 text-xs text-muted-foreground">You&apos;ll receive TRUMP COLLAPSED THE MARKET updates soon.</p>
        </div>
      ) : (
        <>
          <h3 className="text-sm font-medium text-red-600">Stay Updated</h3>
          <p className="mt-1 text-xs text-muted-foreground">Get the latest TRUMP COLLAPSED THE MARKET news and market updates.</p>
          <form onSubmit={handleSubmit} className="mt-3 space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-8 text-xs"
            />
            <Button type="submit" className="w-full bg-red-600 text-xs hover:bg-red-700">
              Subscribe
            </Button>
          </form>
        </>
      )}
    </div>
  )
}