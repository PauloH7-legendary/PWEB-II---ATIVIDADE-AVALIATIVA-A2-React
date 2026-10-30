function OfferIllustration({ type }) {
  return (
    <div className="offer-illustration">
      {type === "national" && (
        <svg viewBox="0 0 300 165" aria-hidden="true">
          <circle cx="236" cy="36" r="19" fill="#F9E7FC" />
          <path
            d="M28 119 L91 42 L139 101 L174 64 L253 123 Z"
            fill="#DCC9EE"
          />
          <path
            d="M55 119 L112 30 L165 119 Z"
            fill="#3F3D56"
          />
          <path
            d="M112 30 L126 68 L111 60 L99 78 Z"
            fill="#827F99"
          />
          <path
            d="M21 123 Q78 111 132 125 T279 122 L279 145 L21 145 Z"
            fill="#C9B3E6"
          />
          <path
            d="M21 134 Q76 124 130 136 T279 133"
            stroke="#EE24FF"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M224 80 L224 120 M224 89 L209 78 M224 99 L240 86"
            stroke="#3F3D56"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M209 78 Q217 69 224 80 Q211 83 209 78
               M240 86 Q244 74 255 77 Q250 89 240 86
               M224 99 Q210 93 205 101 Q215 109 224 99"
            fill="#EE24FF"
          />
          <path
            d="M257 42 L267 37 L262 45 L272 48 L265 51 L259 48 Z"
            fill="#3F3D56"
          />
          <circle cx="71" cy="98" r="9" fill="#EE24FF" />
          <circle cx="71" cy="98" r="3" fill="#FFFFFF" />
        </svg>
      )}

      {type === "international" && (
        <svg viewBox="0 0 300 165" aria-hidden="true">
          <circle cx="148" cy="83" r="53" fill="#3F3D56" />
          <circle
            cx="148"
            cy="83"
            r="44"
            stroke="#DCC9EE"
            strokeWidth="2"
            fill="none"
          />
          <ellipse
            cx="148"
            cy="83"
            rx="21"
            ry="44"
            stroke="#DCC9EE"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M106 83 H190 M113 63 Q148 78 183 63 M113 103 Q148 88 183 103"
            stroke="#DCC9EE"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M121 57 L135 48 L143 57 L137 69 L125 70 Z
               M155 76 L173 68 L183 80 L173 88 L166 101 L151 94 Z
               M129 100 L141 92 L148 106 L139 118 Z"
            fill="#FFFFFF"
          />
          <path
            d="M36 115 C70 142 210 145 253 101"
            stroke="#EE24FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="5 7"
            fill="none"
          />
          <path
            d="M218 36 L238 29 L229 39 L242 44 L230 46 L225 56 L220 46 L209 43 Z"
            fill="#EE24FF"
          />
          <circle cx="116" cy="49" r="7" fill="#EE24FF" />
          <circle cx="116" cy="49" r="2.5" fill="#FFFFFF" />
          <circle cx="174" cy="104" r="7" fill="#EE24FF" />
          <circle cx="174" cy="104" r="2.5" fill="#FFFFFF" />
        </svg>
      )}

      {type === "package" && (
        <svg viewBox="0 0 300 165" aria-hidden="true">
          <ellipse cx="151" cy="143" rx="91" ry="10" fill="#F0E5F7" />
          <path
            d="M119 47 V32 Q119 24 127 24 H151 Q159 24 159 32 V47"
            stroke="#3F3D56"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
          <rect
            x="91"
            y="43"
            width="97"
            height="91"
            rx="12"
            fill="#3F3D56"
          />
          <path
            d="M112 48 V127 M167 48 V127"
            stroke="#827F99"
            strokeWidth="3"
          />
          <rect
            x="112"
            y="70"
            width="58"
            height="36"
            rx="5"
            fill="#827F99"
          />
          <rect
            x="166"
            y="91"
            width="91"
            height="40"
            rx="6"
            fill="#FFFFFF"
            stroke="#C9B3E6"
            strokeWidth="2"
            transform="rotate(-12 166 91)"
          />
          <path
            d="M193 104 L204 97 L200 106 L211 110 L202 113 L197 122 L194 113 L184 110 Z"
            fill="#EE24FF"
          />
          <rect
            x="39"
            y="85"
            width="48"
            height="54"
            rx="5"
            fill="#EE24FF"
            transform="rotate(-10 39 85)"
          />
          <circle cx="60" cy="109" r="12" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <ellipse cx="60" cy="109" rx="5" ry="12" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M48 109 H72 M60 97 V121" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="225" cy="50" r="17" fill="#F9E7FC" />
          <circle cx="225" cy="50" r="7" fill="#EE24FF" />
        </svg>
      )}

 {/*ILUSTRAÇÃO: E-mail */}

         {type === "email" && (
  <svg viewBox="0 0 300 165" aria-hidden="true">
    <circle cx="150" cy="82" r="57" fill="#F0E5F7" />
    <rect
      x="87"
      y="49"
      width="126"
      height="82"
      rx="12"
      fill="#FFFFFF"
      stroke="#C9B3E6"
      strokeWidth="3"
    />
    <path
      d="M90 56 L150 100 L210 56"
      fill="none"
      stroke="#EE24FF"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M91 122 L130 88 M209 122 L170 88"
      fill="none"
      stroke="#827F99"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="213" cy="43" r="14" fill="#EE24FF" />
    <path
      d="M206 43 L211 48 L220 38"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)}

{/* ILUSTRAÇÃO: Atendimento */}

   {type === "support" && (
  <svg viewBox="0 0 300 165" aria-hidden="true">
    <circle cx="144" cy="82" r="57" fill="#F0E5F7" />
    <circle cx="145" cy="67" r="25" fill="#D9B9A8" />
    <path
      d="M120 67 Q116 37 145 37 Q175 39 170 69 L165 79 L162 57 Q145 65 127 55 L125 78 Z"
      fill="#3F3D56"
    />
    <path
      d="M105 136 Q108 96 145 96 Q183 96 186 136 Z"
      fill="#827F99"
    />
    <path
      d="M115 68 Q110 45 126 42 M174 67 Q178 45 162 42"
      fill="none"
      stroke="#EE24FF"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <rect x="105" y="62" width="13" height="25" rx="6" fill="#EE24FF" />
    <rect x="172" y="62" width="13" height="25" rx="6" fill="#EE24FF" />
    <path
      d="M178 85 Q177 101 155 101"
      fill="none"
      stroke="#EE24FF"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <rect x="190" y="36" width="37" height="29" rx="9" fill="#FFFFFF" stroke="#C9B3E6" strokeWidth="2" />
    <path
      d="M198 47 H218 M198 54 H212"
      stroke="#EE24FF"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)}

{/* ILUSTRAÇÃO: Planejamento */}

   {type === "planning" && (
  <svg viewBox="0 0 300 165" aria-hidden="true">
    <circle cx="150" cy="84" r="58" fill="#F0E5F7" />
    <rect x="85" y="42" width="92" height="91" rx="10" fill="#FFFFFF" stroke="#C9B3E6" strokeWidth="3" />
    <path d="M85 65 H177" stroke="#EE24FF" strokeWidth="5" />
    <path d="M108 34 V51 M153 34 V51" stroke="#3F3D56" strokeWidth="6" strokeLinecap="round" />
    <rect x="101" y="78" width="14" height="14" rx="3" fill="#EE24FF" />
    <rect x="124" y="78" width="14" height="14" rx="3" fill="#C9B3E6" />
    <rect x="147" y="78" width="14" height="14" rx="3" fill="#C9B3E6" />
    <rect x="101" y="101" width="14" height="14" rx="3" fill="#C9B3E6" />
    <rect x="124" y="101" width="14" height="14" rx="3" fill="#EE24FF" />
    <path
      d="M206 49 C206 35 217 27 230 27 C243 27 254 37 254 49 C254 67 230 88 230 88 C230 88 206 67 206 49Z"
      fill="#EE24FF"
    />
    <circle cx="230" cy="48" r="8" fill="#FFFFFF" />
    <path
      d="M190 116 L204 128 L228 103"
      fill="none"
      stroke="#827F99"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)}

</div>
  
);
}

export default OfferIllustration;