import Typography from '@/src/components/utils/Typography'
import React from 'react'

const logoText = "🔥Shortr"

const Logo = () => {
  return (
    <Typography.Heading className="font-bold tracking-tighter">{logoText}</Typography.Heading>
  )
}

export default Logo