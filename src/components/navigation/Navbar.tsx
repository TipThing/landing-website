import PrimaryMenu from "./components/PrimaryMenu";
import ResponsiveMenu from "./components/ResponsiveMenu";
import UserIcon from "./components/UserIcon";

export default function Navbar() {
    return (
        <div className="navbar bg-base-300 xl:my-5 lg:my-5 md:my-5 sm:my-5 rounded-lg bg-opacity-60 backdrop-blur-lg z-[100] relative">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ResponsiveMenu />
                </div>
                <a className="normal-case text-xl rounded-lg px-5 py-3 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" xmlnsXlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 24.816406 40.195312 L 350.316406 40.195312 L 350.316406 334.945312 L 24.816406 334.945312 Z M 24.816406 40.195312 " clipRule="nonzero"/></clipPath></defs><g clipPath="url(#id1)"><path fill="rgb(85.099792%, 85.099792%, 85.099792%)" d="M 301.382812 137.890625 L 287.648438 137.890625 C 235.179688 137.890625 205.71875 114.167969 179.730469 93.238281 C 158.898438 76.457031 130.238281 61.972656 103.171875 61.972656 L 74.535156 61.972656 C 59.976562 61.972656 47.429688 73.136719 46.710938 87.675781 C 46.667969 88.589844 46.667969 89.503906 46.714844 90.417969 C 46.761719 91.332031 46.855469 92.242188 46.996094 93.144531 C 47.136719 94.050781 47.320312 94.945312 47.550781 95.828125 C 47.78125 96.714844 48.054688 97.585938 48.375 98.445312 C 48.691406 99.300781 49.054688 100.140625 49.457031 100.960938 C 49.859375 101.78125 50.304688 102.582031 50.789062 103.359375 C 51.273438 104.132812 51.796875 104.882812 52.355469 105.605469 C 52.914062 106.328125 53.511719 107.023438 54.140625 107.6875 C 54.773438 108.347656 55.433594 108.980469 56.128906 109.574219 C 56.820312 110.171875 57.542969 110.730469 58.296875 111.253906 C 59.046875 111.777344 59.820312 112.257812 60.621094 112.703125 C 61.421875 113.148438 62.242188 113.550781 63.082031 113.910156 C 63.921875 114.273438 64.777344 114.589844 65.648438 114.867188 C 66.523438 115.140625 67.40625 115.371094 68.304688 115.554688 C 69.199219 115.738281 70.101562 115.878906 71.011719 115.972656 C 71.921875 116.066406 72.835938 116.113281 73.75 116.113281 L 120.226562 116.113281 C 193.789062 116.113281 237.707031 149.773438 237.707031 206.148438 L 237.632812 206.148438 C 237.683594 206.148438 237.707031 206.175781 237.707031 206.222656 L 237.707031 284.488281 C 237.707031 286.171875 237.621094 287.851562 237.449219 289.523438 C 237.28125 291.199219 237.027344 292.859375 236.691406 294.507812 C 236.359375 296.15625 235.941406 297.785156 235.441406 299.390625 C 234.945312 300.996094 234.367188 302.578125 233.710938 304.125 C 233.054688 305.675781 232.324219 307.1875 231.519531 308.664062 C 230.710938 310.140625 229.832031 311.574219 228.882812 312.960938 C 227.933594 314.347656 226.914062 315.6875 225.832031 316.972656 C 224.746094 318.261719 223.601562 319.492188 222.394531 320.664062 C 221.1875 321.835938 219.925781 322.945312 218.609375 323.992188 C 217.292969 325.039062 215.925781 326.015625 214.511719 326.925781 C 213.097656 327.835938 211.640625 328.671875 210.140625 329.4375 C 208.640625 330.199219 207.109375 330.886719 205.539062 331.5 C 203.972656 332.109375 202.378906 332.640625 200.757812 333.09375 C 199.136719 333.542969 197.5 333.914062 195.84375 334.203125 C 194.183594 334.492188 192.515625 334.695312 190.839844 334.816406 C 189.160156 334.9375 187.480469 334.976562 185.800781 334.929688 C 158.332031 334.152344 136.792969 310.84375 136.792969 283.339844 L 136.792969 161.074219 C 136.792969 160.359375 136.863281 159.648438 137.003906 158.949219 C 137.144531 158.246094 137.347656 157.566406 137.621094 156.90625 C 137.894531 156.246094 138.230469 155.617188 138.628906 155.023438 C 139.027344 154.429688 139.476562 153.878906 139.984375 153.375 C 140.488281 152.867188 141.039062 152.417969 141.632812 152.019531 C 142.226562 151.621094 142.855469 151.285156 143.515625 151.011719 C 144.175781 150.738281 144.855469 150.53125 145.558594 150.394531 C 146.257812 150.253906 146.964844 150.183594 147.679688 150.183594 C 148.394531 150.183594 149.105469 150.253906 149.804688 150.394531 C 150.507812 150.53125 151.1875 150.738281 151.847656 151.011719 C 152.507812 151.285156 153.136719 151.621094 153.730469 152.019531 C 154.324219 152.417969 154.875 152.867188 155.378906 153.375 C 155.886719 153.878906 156.335938 154.429688 156.734375 155.023438 C 157.132812 155.617188 157.464844 156.246094 157.738281 156.90625 C 158.011719 157.566406 158.21875 158.246094 158.359375 158.949219 C 158.5 159.648438 158.570312 160.359375 158.570312 161.074219 L 158.570312 283.597656 C 158.570312 300.660156 172.546875 314.4375 189.550781 313.082031 C 190.441406 313.011719 191.324219 312.898438 192.199219 312.742188 C 193.078125 312.589844 193.945312 312.394531 194.804688 312.15625 C 195.664062 311.921875 196.511719 311.648438 197.34375 311.332031 C 198.179688 311.019531 198.996094 310.664062 199.796875 310.277344 C 200.597656 309.886719 201.378906 309.457031 202.140625 308.996094 C 202.902344 308.53125 203.640625 308.035156 204.355469 307.503906 C 205.070312 306.972656 205.757812 306.40625 206.421875 305.8125 C 207.082031 305.214844 207.71875 304.589844 208.320312 303.933594 C 208.925781 303.28125 209.5 302.597656 210.039062 301.890625 C 210.578125 301.183594 211.085938 300.449219 211.558594 299.695312 C 212.03125 298.9375 212.46875 298.164062 212.871094 297.367188 C 213.269531 296.570312 213.632812 295.757812 213.957031 294.929688 C 214.28125 294.097656 214.566406 293.253906 214.8125 292.398438 C 215.058594 291.542969 215.265625 290.675781 215.433594 289.800781 C 215.597656 288.925781 215.722656 288.042969 215.804688 287.15625 C 215.890625 286.269531 215.933594 285.378906 215.933594 284.488281 L 215.933594 206.222656 C 215.9375 206.171875 215.964844 206.148438 216.015625 206.148438 L 215.933594 206.148438 C 215.933594 146.757812 155.964844 137.890625 120.226562 137.890625 L 74.785156 137.890625 C 48.210938 137.890625 25.71875 117.089844 24.90625 90.523438 C 24.859375 88.894531 24.890625 87.265625 25.007812 85.640625 C 25.121094 84.011719 25.320312 82.394531 25.59375 80.789062 C 25.871094 79.179688 26.230469 77.59375 26.664062 76.019531 C 27.101562 74.449219 27.613281 72.902344 28.203125 71.382812 C 28.796875 69.863281 29.460938 68.378906 30.199219 66.925781 C 30.9375 65.46875 31.75 64.058594 32.628906 62.683594 C 33.511719 61.3125 34.457031 59.988281 35.46875 58.710938 C 36.484375 57.433594 37.558594 56.207031 38.695312 55.039062 C 39.828125 53.867188 41.019531 52.757812 42.265625 51.707031 C 43.515625 50.65625 44.808594 49.667969 46.15625 48.75 C 47.5 47.828125 48.890625 46.976562 50.320312 46.191406 C 51.75 45.410156 53.214844 44.703125 54.71875 44.066406 C 56.21875 43.429688 57.75 42.871094 59.304688 42.386719 C 60.863281 41.90625 62.441406 41.5 64.039062 41.175781 C 65.636719 40.851562 67.246094 40.609375 68.871094 40.445312 C 70.492188 40.28125 72.117188 40.199219 73.75 40.195312 L 103.175781 40.195312 C 137.898438 40.195312 171.367188 58.539062 193.398438 76.277344 C 217.742188 95.863281 242.859375 116.113281 287.660156 116.113281 L 300.609375 116.113281 C 315.167969 116.113281 327.707031 104.945312 328.425781 90.40625 C 328.472656 89.492188 328.46875 88.578125 328.421875 87.664062 C 328.375 86.75 328.28125 85.84375 328.140625 84.9375 C 328.003906 84.035156 327.816406 83.140625 327.585938 82.253906 C 327.355469 81.367188 327.082031 80.496094 326.765625 79.640625 C 326.445312 78.78125 326.085938 77.941406 325.679688 77.121094 C 325.277344 76.300781 324.832031 75.503906 324.347656 74.726562 C 323.863281 73.949219 323.34375 73.199219 322.78125 72.476562 C 322.222656 71.753906 321.628906 71.0625 320.996094 70.398438 C 320.367188 69.734375 319.703125 69.105469 319.011719 68.511719 C 318.316406 67.914062 317.59375 67.355469 316.84375 66.832031 C 316.09375 66.308594 315.316406 65.828125 314.515625 65.382812 C 313.71875 64.9375 312.898438 64.535156 312.058594 64.175781 C 311.21875 63.8125 310.359375 63.496094 309.488281 63.222656 C 308.617188 62.945312 307.730469 62.71875 306.835938 62.53125 C 305.9375 62.347656 305.035156 62.207031 304.125 62.113281 C 303.214844 62.023438 302.304688 61.976562 301.390625 61.972656 L 194.789062 61.972656 C 194.074219 61.972656 193.367188 61.902344 192.664062 61.765625 C 191.964844 61.625 191.28125 61.417969 190.621094 61.144531 C 189.960938 60.871094 189.335938 60.535156 188.742188 60.136719 C 188.144531 59.742188 187.597656 59.289062 187.089844 58.785156 C 186.585938 58.277344 186.132812 57.730469 185.738281 57.132812 C 185.339844 56.539062 185.003906 55.914062 184.730469 55.253906 C 184.457031 54.589844 184.25 53.910156 184.109375 53.210938 C 183.972656 52.507812 183.902344 51.800781 183.902344 51.085938 C 183.902344 50.371094 183.972656 49.664062 184.109375 48.960938 C 184.25 48.261719 184.457031 47.578125 184.730469 46.917969 C 185.003906 46.257812 185.339844 45.628906 185.738281 45.035156 C 186.132812 44.441406 186.585938 43.890625 187.089844 43.386719 C 187.597656 42.878906 188.144531 42.429688 188.742188 42.03125 C 189.335938 41.636719 189.960938 41.300781 190.621094 41.027344 C 191.28125 40.753906 191.964844 40.546875 192.664062 40.40625 C 193.367188 40.265625 194.074219 40.195312 194.789062 40.195312 L 300.347656 40.195312 C 326.921875 40.195312 349.414062 61 350.207031 87.566406 C 350.253906 89.195312 350.222656 90.820312 350.105469 92.449219 C 349.992188 94.074219 349.792969 95.691406 349.515625 97.296875 C 349.242188 98.902344 348.882812 100.492188 348.449219 102.0625 C 348.011719 103.632812 347.5 105.179688 346.910156 106.699219 C 346.320312 108.21875 345.652344 109.707031 344.914062 111.160156 C 344.175781 112.609375 343.367188 114.023438 342.484375 115.394531 C 341.605469 116.769531 340.660156 118.09375 339.644531 119.371094 C 338.632812 120.648438 337.558594 121.871094 336.425781 123.042969 C 335.289062 124.210938 334.097656 125.320312 332.851562 126.375 C 331.605469 127.425781 330.3125 128.410156 328.964844 129.332031 C 327.621094 130.253906 326.234375 131.105469 324.804688 131.886719 C 323.375 132.671875 321.910156 133.378906 320.40625 134.015625 C 318.90625 134.652344 317.378906 135.210938 315.820312 135.695312 C 314.265625 136.175781 312.6875 136.582031 311.089844 136.90625 C 309.492188 137.234375 307.882812 137.476562 306.261719 137.640625 C 304.640625 137.804688 303.011719 137.890625 301.382812 137.890625 Z M 301.382812 137.890625 " fillOpacity="1" fillRule="nonzero"/></g></svg>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <PrimaryMenu />
            </div>
            <div className="navbar-end">
                <UserIcon />
            </div>
        </div>
    )
}