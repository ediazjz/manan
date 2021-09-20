import PropTypes from 'prop-types'

export const MeditateIcon = ({ className, type }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      version="1.1"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      {type === "solid"
        ? <><circle cx="255.995" cy="63.999" r="63.999"></circle><path d="M380.385 465.702L301.57 495.26l39.194 14.698c16.868 6.263 35.068-2.415 41.202-18.733 3.265-8.707 2.299-17.826-1.581-25.523zM107.238 354.024c-16.515-6.125-34.984 2.188-41.202 18.733-6.203 16.547 2.188 34.984 18.733 41.202l34.523 12.945 91.143-34.183-103.197-38.697zM445.964 372.758c-6.219-16.547-24.687-24.859-41.202-18.733l-255.995 95.998c-16.547 6.219-24.937 24.655-18.734 41.202 6.133 16.313 24.329 24.998 41.202 18.733L427.23 413.96c16.548-6.218 24.938-24.655 18.734-41.202zM479.996 255.995h-76.217l-55.155-110.31c-5.732-11.453-17.392-17.978-29.409-17.687H192.782c-12.015-.291-23.66 6.235-29.405 17.687l-55.155 110.31H32.005c-17.671 0-31.999 14.328-31.999 31.999s14.328 31.999 31.999 31.999h95.998a31.994 31.994 0 0028.624-17.687l35.374-70.748v120.08l63.997 23.997 64.001-24.004V231.558l35.374 70.748a31.994 31.994 0 0028.624 17.687h95.998c17.671 0 31.999-14.328 31.999-31.999s-14.327-31.999-31.998-31.999z"></path></>
        : <path d="M467 255.992h-63.185l-47.566-95.132c-7.61-15.207-23.326-24.867-40.289-24.869 9.438-12.543 15.04-28.128 15.04-44.999 0-41.355-33.645-75-75-75s-75 33.645-75 75c0 16.87 5.602 32.455 15.04 44.998-16.929-.015-32.662 9.66-40.292 24.876l-47.563 95.126H45c-24.813 0-45 20.187-45 45s20.187 44.8 45 44.8h18.582c-8.142 23.012 3.651 48.709 26.619 57.341l43.668 16.375c-11.826 12.113-16.329 30.428-10.006 47.294 8.399 22.344 33.759 35.307 57.936 26.331L256 465.308l74.246 27.843c24.013 8.914 49.451-3.897 57.896-26.36 6.319-16.856 1.816-35.167-10.012-47.281l43.68-16.38c22.954-8.627 34.746-34.116 26.607-57.137H467c24.813 0 45-20.187 45-45s-20.187-45.001-45-45.001zm-211-210c24.813 0 45 20.187 45 45s-20.187 45-45 45-45-20.187-45-45 20.187-45 45-45zM100.745 375.047c-7.752-2.913-11.697-11.581-8.8-19.31 2.902-7.724 11.59-11.661 19.32-8.795l102.015 38.255-42.734 16.025-69.801-26.175zm64.56-39.881a45.103 45.103 0 0010.947-14.048l4.748-9.495v29.429l-15.695-5.886zm194.75 121.081c-2.794 7.432-11.211 11.806-19.32 8.796l-42.015-15.755 42.734-16.025 9.801 3.675c7.752 2.913 11.697 11.581 8.8 19.309zm51.211-81.204l-239.955 89.983c-8.228 3.055-16.595-1.409-19.36-8.767-2.902-7.74 1.043-16.408 8.784-19.317l239.949-89.981c7.77-2.883 16.467 1.047 19.366 8.765 2.902 7.74-1.043 16.408-8.784 19.317zM331 341.052v-29.429l4.748 9.495a45.103 45.103 0 0010.947 14.048L331 341.052zm136-25.06h-91a14.922 14.922 0 01-13.42-8.29l-33.164-66.328A15 15 0 00301 248.082v104.22l-45 16.875-45-16.875v-104.22a15 15 0 00-28.416-6.708l-33.164 66.328a14.922 14.922 0 01-13.42 8.29H45c-8.271 0-15-6.729-15-15s6.729-15 15-15h72.455c5.682 0 10.876-3.21 13.416-8.292l51.701-103.402c2.492-4.97 7.569-8.172 13.074-8.31.117.002.235.004.354.004h120c.117 0 .234-.001.351-.004 5.512.137 10.587 3.335 13.069 8.294L381.129 277.7a14.998 14.998 0 0013.416 8.292H467c8.271 0 15 6.729 15 15s-6.729 15-15 15z"></path>
      }
    </svg>
  )
}

export const LoadingIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-spin ${className}`}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 16.667a6.666 6.666 0 110-13.333 6.666 6.666 0 010 13.333z"
        opacity="0.2"
      ></path>
      <path
        fill="currentColor"
        d="M3.333 10A6.667 6.667 0 0110 3.333V0A10 10 0 000 10c0 1.756.464 3.481 1.346 5l2.887-1.667a6.666 6.666 0 01-.9-3.333z"
        opacity="0.55"
      ></path>
    </svg>
  )
}

MeditateIcon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
}

LoadingIcon.propTypes = {
  className: PropTypes.string
}