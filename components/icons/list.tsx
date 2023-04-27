import { IconProps } from '@type/global/icon'

export default function ListIcon({ color = '#01AA8D', width = '15', height = '20' }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.6875 5.3125V0H1.26562C0.77207 0 0.375 0.417969 0.375 0.9375V19.0625C0.375 19.582 0.77207 20 1.26562 20H13.7344C14.2279 20 14.625 19.582 14.625 19.0625V6.25H9.57812C9.08828 6.25 8.6875 5.82812 8.6875 5.3125ZM11.0625 14.5312C11.0625 14.7891 10.8621 15 10.6172 15H4.38281C4.13789 15 3.9375 14.7891 3.9375 14.5312V14.2188C3.9375 13.9609 4.13789 13.75 4.38281 13.75H10.6172C10.8621 13.75 11.0625 13.9609 11.0625 14.2188V14.5312ZM11.0625 12.0312C11.0625 12.2891 10.8621 12.5 10.6172 12.5H4.38281C4.13789 12.5 3.9375 12.2891 3.9375 12.0312V11.7188C3.9375 11.4609 4.13789 11.25 4.38281 11.25H10.6172C10.8621 11.25 11.0625 11.4609 11.0625 11.7188V12.0312ZM11.0625 9.21875V9.53125C11.0625 9.78906 10.8621 10 10.6172 10H4.38281C4.13789 10 3.9375 9.78906 3.9375 9.53125V9.21875C3.9375 8.96094 4.13789 8.75 4.38281 8.75H10.6172C10.8621 8.75 11.0625 8.96094 11.0625 9.21875ZM14.625 4.76172V5H9.875V0H10.1014C10.3389 0 10.5652 0.0976562 10.7322 0.273438L14.3652 4.10156C14.5322 4.27734 14.625 4.51562 14.625 4.76172Z"
        fill={color}
      />
    </svg>
  )
}
