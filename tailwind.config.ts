
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        ramadan: {
          blue: '#1F3A5F',
          gold: '#E5B85C',
          navy: '#0F2447',
          sand: '#F2E9D8',
          cream: '#FFF6E9',
          midnight: '#0A1A33',
          accent: '#4D7CBF'
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-delayed': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '50%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'scale-in': {
          '0%': { 
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'slide-in': {
          '0%': { 
            transform: 'translateX(-20px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0)' 
          },
          '50%': { 
            transform: 'translateY(-10px)' 
          }
        },
        'pulse-gentle': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.85',
            transform: 'scale(0.98)'
          }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-delayed': 'fade-in-delayed 1.2s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 12s linear infinite'
			},
      backgroundImage: {
        'geometric-pattern': "url('/patterns/geometric-light.svg')",
        'geometric-pattern-dark': "url('/patterns/geometric-dark.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #e6c06a 0%, #f9e2b3 50%, #e5b85c 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1f3a5f 0%, #0f2447 100%)',
        'gradient-nav': 'linear-gradient(180deg, rgba(15,36,71,0.9) 0%, rgba(15,36,71,0.8) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 12px rgba(229, 184, 92, 0.15)',
        'blue': '0 4px 12px rgba(31, 58, 95, 0.15)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
        'nav': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'sans': ['Inter', 'SF Pro Display', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Amiri', 'Georgia', 'serif'],
        'mono': ['SF Mono', 'Menlo', 'monospace'],
        'display': ['Noto Sans Arabic', 'Inter', 'sans-serif'],
      },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
