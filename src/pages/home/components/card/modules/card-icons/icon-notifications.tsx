import { SvgIcon, SvgIconProps } from '@mui/material'

export const IconNotifications = ({ ...rest }: SvgIconProps) => {
  return (
    <SvgIcon {...rest}>
      <svg
        width="44"
        height="53"
        viewBox="0 0 44 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38 36.625L43.375 42V44.625H0.625V42L6 36.625V23.375C6 19.2083 7.04167 15.5833 9.125 12.5C11.2917 9.41667 14.25 7.41667 18 6.5V4.625C18 3.54167 18.375 2.625 19.125 1.875C19.875 1.04167 20.8333 0.625 22 0.625C23.1667 0.625 24.125 1.04167 24.875 1.875C25.625 2.625 26 3.54167 26 4.625V6.5C29.75 7.41667 32.6667 9.41667 34.75 12.5C36.9167 15.5833 38 19.2083 38 23.375V36.625ZM22 52.625C20.5 52.625 19.2083 52.125 18.125 51.125C17.125 50.125 16.625 48.875 16.625 47.375H27.375C27.375 48.7917 26.8333 50.0417 25.75 51.125C24.6667 52.125 23.4167 52.625 22 52.625Z"
          fill="#0B3B60"
        />
      </svg>
    </SvgIcon>
  )
}