import React from 'react'

const SocialButton = ({children, href, className = '', download = false, filename = ''}) => {
  const base = "h-12 w-12 rounded-md bg-white/90 hover:bg-white shadow-md grid place-items-center transition"
  if (href) {
    return (
      <a
        href={href}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
        download={download ? filename || '' : undefined}
        className={[base, className].join(' ')}
      >
        {children}
      </a>
    )
  }
  return (
    <button className={[base, className].join(' ')}>
      {children}
    </button>
  );
}

export default SocialButton