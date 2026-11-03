import React from 'react';

/** Ilustraciones SVG originales integradas al proyecto: funcionan sin internet. */
export function FoodArt({ kind, compact = false }) {
  if (kind === 'tacos-chipotle') {
    return (
      <svg className={`food-art ${compact ? 'food-art--compact' : ''}`} viewBox="0 0 480 360" aria-label="Ilustración de tacos de pollo" role="img">
        <defs>
          <linearGradient id="bgTaco" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFE8C7"/><stop offset="1" stopColor="#FFD8B5"/></linearGradient>
          <radialGradient id="tortilla"><stop stopColor="#FFDE90"/><stop offset="1" stopColor="#E6A84B"/></radialGradient>
          <filter id="shadowT"><feDropShadow dx="0" dy="12" stdDeviation="11" floodColor="#BA7336" floodOpacity=".22"/></filter>
        </defs>
        <rect width="480" height="360" rx="24" fill="url(#bgTaco)"/>
        <circle cx="410" cy="52" r="75" fill="#FFEBCB" opacity=".7"/><circle cx="66" cy="310" r="102" fill="#F8BF91" opacity=".35"/>
        <g filter="url(#shadowT)">
          <ellipse cx="240" cy="220" rx="168" ry="116" fill="#FFF9EE"/>
          <ellipse cx="240" cy="214" rx="146" ry="98" fill="#F4E8D6"/>
          <g transform="translate(110 86) rotate(-17 120 120)">
            <path d="M20 132 Q75 13 155 100 Q180 145 175 210 Q104 238 20 170Z" fill="url(#tortilla)" stroke="#E3A24D" strokeWidth="4"/>
            <path d="M35 129 Q90 60 157 118" fill="none" stroke="#7CBA60" strokeWidth="19" strokeLinecap="round" strokeDasharray="21 10"/>
            <path d="M43 149 Q90 88 156 133" fill="none" stroke="#6E984E" strokeWidth="16" strokeLinecap="round" strokeDasharray="17 14"/>
            <g fill="#B66434"><ellipse cx="65" cy="143" rx="16" ry="9" transform="rotate(-17 65 143)"/><ellipse cx="94" cy="124" rx="17" ry="10" transform="rotate(24 94 124)"/><ellipse cx="127" cy="130" rx="18" ry="10"/><ellipse cx="145" cy="155" rx="17" ry="10"/><ellipse cx="82" cy="164" rx="18" ry="9"/></g>
            <path d="M40 151 Q87 106 154 155" fill="none" stroke="#F8F0D7" strokeWidth="9" strokeLinecap="round" strokeDasharray="18 13"/>
            <g fill="#B64047"><circle cx="77" cy="128" r="5"/><circle cx="116" cy="150" r="5"/><circle cx="90" cy="173" r="4"/></g>
          </g>
          <g transform="translate(224 71) rotate(18 90 125)">
            <path d="M12 143 Q61 31 148 111 Q177 149 161 213 Q88 239 12 179Z" fill="url(#tortilla)" stroke="#E3A24D" strokeWidth="4"/>
            <path d="M32 142 Q82 77 146 132" fill="none" stroke="#7DBE5D" strokeWidth="20" strokeLinecap="round" strokeDasharray="22 9"/>
            <path d="M39 162 Q91 98 148 153" fill="none" stroke="#568C42" strokeWidth="16" strokeLinecap="round" strokeDasharray="19 12"/>
            <g fill="#B56A3A"><ellipse cx="58" cy="148" rx="17" ry="10"/><ellipse cx="89" cy="132" rx="16" ry="9"/><ellipse cx="120" cy="147" rx="17" ry="10"/><ellipse cx="78" cy="173" rx="19" ry="9"/><ellipse cx="135" cy="171" rx="15" ry="9"/></g>
            <path d="M33 159 Q81 118 149 172" fill="none" stroke="#FFF4DD" strokeWidth="10" strokeLinecap="round" strokeDasharray="17 13"/>
            <g fill="#C94F4B"><circle cx="65" cy="164" r="5"/><circle cx="111" cy="154" r="5"/><circle cx="95" cy="183" r="5"/></g>
          </g>
          <g transform="translate(286 227)"><path d="M0 22 Q29 -9 55 15 L40 45Z" fill="#80AF51"/><path d="M10 23 Q30 5 47 18 L37 34Z" fill="#D0E29D"/></g>
          <g transform="translate(102 223)"><path d="M0 22 Q28 -11 54 13 L36 46Z" fill="#72A44F"/><path d="M11 21 Q30 3 43 17 L34 32Z" fill="#CEE0A3"/></g>
        </g>
        <g fill="#E9AA73" opacity=".5"><circle cx="50" cy="52" r="6"/><circle cx="431" cy="293" r="9"/><circle cx="387" cy="91" r="4"/></g>
      </svg>
    );
  }
  return (
    <svg className={`food-art ${compact ? 'food-art--compact' : ''}`} viewBox="0 0 480 360" aria-label="Ilustración de pasta cremosa al pesto" role="img">
      <defs>
        <linearGradient id="bgPasta" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#E1EDCA"/><stop offset="1" stopColor="#BED7AE"/></linearGradient>
        <filter id="shadowP"><feDropShadow dx="0" dy="12" stdDeviation="11" floodColor="#547D5B" floodOpacity=".25"/></filter>
      </defs>
      <rect width="480" height="360" rx="24" fill="url(#bgPasta)"/>
      <circle cx="425" cy="50" r="90" fill="#E5F0D3" opacity=".8"/><circle cx="45" cy="305" r="100" fill="#B8D39E" opacity=".55"/>
      <g filter="url(#shadowP)">
        <ellipse cx="238" cy="186" rx="164" ry="136" fill="#FEFFFA"/><ellipse cx="238" cy="186" rx="141" ry="116" fill="#E8EFD6"/>
        <ellipse cx="238" cy="190" rx="126" ry="103" fill="#86AD61"/>
        <g fill="none" strokeLinecap="round">
          <path d="M139 160 C174 109 241 116 269 152 S328 191 289 232 S186 261 164 216 S225 151 264 182 S214 234 191 199" stroke="#F5DE94" strokeWidth="17"/>
          <path d="M142 202 C153 147 218 117 283 149 S318 218 274 242 S172 226 175 177 S238 141 267 194" stroke="#E9C675" strokeWidth="15"/>
          <path d="M165 137 C211 104 302 137 304 192 S244 260 193 237 S140 175 194 160 S279 187 251 218" stroke="#F8E7B1" strokeWidth="13"/>
          <path d="M132 185 C161 124 261 126 310 182 S275 256 216 245" stroke="#F2D48A" strokeWidth="12"/>
        </g>
        <g fill="#3E8655"><ellipse cx="181" cy="139" rx="13" ry="25" transform="rotate(-43 181 139)"/><ellipse cx="277" cy="164" rx="13" ry="26" transform="rotate(40 277 164)"/><ellipse cx="218" cy="231" rx="11" ry="23" transform="rotate(-35 218 231)"/><ellipse cx="298" cy="208" rx="11" ry="20" transform="rotate(62 298 208)"/></g>
        <g fill="#FBFAE5"><circle cx="231" cy="152" r="5"/><circle cx="193" cy="205" r="6"/><circle cx="270" cy="228" r="5"/><circle cx="298" cy="177" r="5"/><circle cx="156" cy="186" r="5"/><circle cx="252" cy="198" r="4"/><circle cx="212" cy="180" r="4"/></g>
      </g>
      <g fill="#709B62" opacity=".55"><circle cx="56" cy="62" r="6"/><circle cx="425" cy="289" r="9"/><circle cx="394" cy="94" r="4"/></g>
    </svg>
  );
}
