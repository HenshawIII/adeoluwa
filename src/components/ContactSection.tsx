export default function ContactSection() {
  return (
    <div className="relative bg-[#FBFBEB] shadow-sm border border-gray-800 p-8">
      <h2 className="text-2xl font-bold text-[#16160E] mb-6">Contact</h2>
      <div className="space-y-4">
        <div>
          <span className="text-sm text-gray-500">Email</span>
          <p className="text-[#16160E]">adeoluwahenshaw@gmail.com</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">Instagram</span>
          <p className="text-[#16160E]">@blackboydgtal</p>
        </div>
       
      </div>
      <a
        href="https://drive.google.com/drive/folders/1qjv_H-Ao3j69sCHkHIzvHnLA-ztNq5fq"
        target="_blank"
        className="absolute bottom-6 right-8 text-base text-[#16160E] hover:underline"
      >
        View full portfolio
      </a>
    </div>
  );
}

