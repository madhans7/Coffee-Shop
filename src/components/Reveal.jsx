import { useEffect, useRef, useState } from 'react'

const Reveal = ({
  children,
  as: Component = 'div',
  direction = 'up',
  delay = 0,
  duration = 700,
  className = '',
  once = true,
  style,
  ...rest
}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(node)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [once])

  const directionClass = {
    up: 'reveal-up',
    left: 'reveal-left',
    right: 'reveal-right',
    fade: 'reveal-fade',
    scale: 'reveal-scale',
  }[direction]

  return (
    <Component
      ref={ref}
      className={`reveal ${directionClass} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{
        '--delay': `${delay}s`,
        '--duration': `${duration}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Reveal
