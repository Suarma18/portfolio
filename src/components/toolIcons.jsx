// Official brand SVG icons for "Tools I Rely On Every Day".
// Default state: monochrome (inherits currentColor).
// Hover state (via parent `.group/tool`): lights up with official brand colors.

export const toolBrandColors = {
  'VS Code': '#2489CA',
  'Git & GitHub': '#F05032',
  'Postman': '#FF6C37',
  'phpMyAdmin': '#F89C0E',
  'XAMPP': '#FB7A24',
  'cPanel': '#FF6C2C',
  'Adobe Creative Suite': '#FA0F00',
  'Figma': '#A259FF',
  'Canva': '#00C4CC',
  'MS Office': '#D83B01',
  'ChatGPT': '#10A37F',
};

export function ToolIcon({ name, className = 'h-4 w-4 shrink-0 transition-transform duration-200 group-hover/tool:scale-110' }) {
  switch (name) {
    case 'VS Code':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#2489CA]"
            d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
          />
        </svg>
      );

    case 'Git & GitHub':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#F05032]"
            d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.605-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
          />
        </svg>
      );

    case 'Postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#FF6C37]"
            d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-.268l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343 1.82 1.82 0 0 1 0-2.416zm2.578 0a1.57 1.57 0 0 0-.465-.185l1.176-1.176a1.82 1.82 0 0 1 .486 1.884l-1.015-1.015a.12.12 0 0 0-.182.012v.48z"
          />
        </svg>
      );

    case 'phpMyAdmin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#F89C0E]"
            d="M12.5 2L5 15h7.5V2z"
          />
          <path
            className="opacity-75 transition-colors duration-200 group-hover/tool:fill-[#6C78AF] group-hover/tool:opacity-100"
            d="M14 4.5V15h5.5L14 4.5z"
          />
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#6C78AF]"
            d="M3 17l2 3h14l2-3H3zm1.5 4.5h15v1.2h-15v-1.2z"
          />
        </svg>
      );

    case 'XAMPP':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#FB7A24]"
            d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm3.75 4.5a2.25 2.25 0 0 0-1.59 3.84L8.82 13l-2.66 2.66a2.25 2.25 0 1 0 3.18 3.18L12 16.18l2.66 2.66a2.25 2.25 0 1 0 3.18-3.18L15.18 13l2.66-2.66a2.25 2.25 0 1 0-3.18-3.18L12 9.82 9.34 7.16A2.24 2.24 0 0 0 7.75 6.5z"
          />
        </svg>
      );

    case 'cPanel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#FF6C2C]"
            d="M16.29 3H11.2L6.68 18.2h3.4l1.35-4.55h3.74c3.35 0 6.23-2.25 7.05-5.5C23.06 4.82 20.1 3 16.29 3zm1.9 5.38c-.4 1.56-1.78 2.62-3.38 2.62h-2.55l1.55-5.22h2.38c1.64 0 2.41 1.03 2 2.6zM6.9 8.15H4.53c-1.85 0-3.56 1.24-4.02 3.04-.74 2.91 1.45 5.46 4.46 5.46h3.27l-.92 3.1H4.68C.47 19.75-2.08 15.1.82 10.15 2.13 7.91 4.54 6.6 7.14 6.6l-.24 1.55z"
          />
        </svg>
      );

    case 'Adobe Creative Suite':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#FA0F00]"
            d="M15.1 2H24v20L15.1 2zM8.9 2H0v20L8.9 2zM12 9.4L17.6 22h-3.8l-1.6-4H8.9L12 9.4z"
          />
        </svg>
      );

    case 'Figma':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#F24E1E]"
            d="M8.5 2h3.5v7H8.5a3.5 3.5 0 1 1 0-7z"
          />
          <path
            className="opacity-85 transition-colors duration-200 group-hover/tool:fill-[#FF7262] group-hover/tool:opacity-100"
            d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
          />
          <path
            className="opacity-75 transition-colors duration-200 group-hover/tool:fill-[#1ABCFE] group-hover/tool:opacity-100"
            d="M15.5 9.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"
          />
          <path
            className="opacity-90 transition-colors duration-200 group-hover/tool:fill-[#A259FF] group-hover/tool:opacity-100"
            d="M8.5 9.5H12v7H8.5a3.5 3.5 0 1 1 0-7z"
          />
          <path
            className="opacity-80 transition-colors duration-200 group-hover/tool:fill-[#0ACF83] group-hover/tool:opacity-100"
            d="M8.5 17H12v1.5a3.5 3.5 0 1 1-3.5-3.5z"
          />
        </svg>
      );

    case 'Canva':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#00C4CC]"
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.77 16.03c-.98 1.54-2.82 2.72-4.96 2.72-3.28 0-5.56-2.46-5.56-5.94 0-3.95 2.79-7.56 6.53-7.56 2.38 0 3.92 1.21 3.92 2.86 0 1.52-1.08 2.57-2.21 2.57-.63 0-1.08-.36-1.08-.95 0-.54.48-.96.48-1.58 0-.52-.43-.88-1.15-.88-1.92 0-3.68 2.54-3.68 5.48 0 2.18 1.24 3.62 3.12 3.62 1.51 0 2.86-.86 3.68-2.08.22-.32.63-.42.93-.18.3.22.34.62.08.92z"
          />
        </svg>
      );

    case 'MS Office':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#D83B01]"
            d="M14.5 1.5L3 6v12l3.5-1.4V7.8l8-2.7v13.8L3 18l11.5 4.5L21 20V4l-6.5-2.5z"
          />
        </svg>
      );

    case 'ChatGPT':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            className="transition-colors duration-200 group-hover/tool:fill-[#10A37F]"
            d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"
          />
        </svg>
      );

    default:
      return null;
  }
}

