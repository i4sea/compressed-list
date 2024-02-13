import Overlay from "../Overlay";

export default function Loading() {
  return (
    <>
      <Overlay />
      <div className="absolute left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 z-20">
        <svg
          width={24}
          height={24}
          viewBox="-3 -3 42 42"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#f97516"
        >
          <title>Loading...</title>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="3">
              <circle strokeOpacity=".2" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}
