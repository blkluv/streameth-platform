import React from 'react'

interface ToolTipIconProps {
  className?: string
}

const ToolTipIcon = ({ className }: ToolTipIconProps) => {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.95981 0.143837C2.22474 0.143837 0 2.36902 0 5.10412C0 7.83921 2.22474 10.0643 4.95981 10.0643C7.69499 10.0643 9.92009 7.83913 9.92009 5.10412C9.92009 2.36902 7.69496 0.143837 4.95981 0.143837ZM4.95981 9.01414C2.80392 9.01414 1.05018 7.26001 1.05018 5.10412C1.05018 2.94822 2.80394 1.19399 4.95981 1.19399C7.11578 1.19399 8.86994 2.94822 8.86994 5.10412C8.86994 7.26001 7.11576 9.01414 4.95981 9.01414Z"
        fill="#857C98"
      />
      <path
        d="M5.46255 4.62235H4.45555C4.28659 4.62235 4.14941 4.75953 4.14941 4.92823V7.91388C4.14941 8.08287 4.28659 8.21978 4.45555 8.21978H5.46255C5.63152 8.21978 5.76869 8.0828 5.76869 7.91388V4.92825C5.76869 4.75955 5.63152 4.62235 5.46255 4.62235Z"
        fill="#857C98"
      />
      <path
        d="M4.95954 1.98848C4.46424 1.98848 4.0625 2.3902 4.0625 2.88551C4.0625 3.38089 4.46422 3.78263 4.95954 3.78263C5.45493 3.78263 5.85669 3.38091 5.85669 2.88551C5.85667 2.3902 5.45495 1.98848 4.95954 1.98848Z"
        fill="#857C98"
      />
    </svg>
  )
}

export default ToolTipIcon