'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabaseClient'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.replace('/login')
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_, session) => {
      if (!session) router.replace('/login')
    })
    return () => sub?.subscription.unsubscribe()
  }, [router])
  return <>{children}</>
} 