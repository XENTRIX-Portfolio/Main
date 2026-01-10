/**
 * Utility function to smoothly scroll to an element
 */
export function scrollToElement(selector: string, offset = 0) {
  const element = document.querySelector(selector)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

/**
 * Format date to a readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/**
 * Sanitize string input (basic)
 */
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}
