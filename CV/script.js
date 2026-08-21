/* 
  FILE: script.js
  ĐÂY LÀ GÌ? : Đây là bộ não quản lý dữ liệu các dự án trong Portfolio của Khương Tuấn Anh.
*/

// ================== DỮ LIỆU CÁC DỰ ÁN ==================
const projectsData = {
  1: {
    title: "Nghiên Cứu Nhận Thức Thương Hiệu: Circle K vs GS25",
    type: "Đồ Án Nghiên Cứu",
    duration: "Học kỳ 1 — 2026",
    results: "Báo cáo 160+ trang • 100+ Khảo sát",
    tools: ["Google Forms", "Google Sheets", "Canva"],
    googleDocUrl: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0",

    findingsTitle: "Kết Quả Nghiên Cứu Nổi Bật",
    findings: [
      "<strong>Vị Thế Mạng Lưới:</strong> Circle K độc chiếm độ phủ với <strong>500+ cửa hàng</strong> (chiếm ~38% thị phần doanh thu CVS), tạo lợi thế cạnh tranh tuyệt đối ở khung giờ 22h–6h sáng.",
      "<strong>Insight Khách Hàng Trẻ:</strong> >60% Gen Z lựa chọn cửa hàng dựa trên <strong>mức độ quen thuộc và trải nghiệm không gian</strong> — yếu tố cảm xúc quan trọng hơn cạnh tranh về giá.",
      "<strong>Sức Hút Hàn Quốc (GS25):</strong> GS25 bứt phá nhờ định vị 'điểm đến trải nghiệm', hơn <strong>50% Gen Z</strong> thừa nhận chịu ảnh hưởng từ văn hóa K-Food trong quyết định ăn uống.",
      "<strong>Mô Hình Cạnh Tranh Rõ Rệt:</strong> Circle K lấy <strong>'Sự tiện lợi & Phủ sóng'</strong> làm lõi, trong khi GS25 tập trung vào <strong>'Trải nghiệm ẩm thực & Không gian kết nối'</strong>.",
      "<strong>Đề Xuất Chiến Lược 2025–2030:</strong> Xây dựng lộ trình phát triển bền vững cho 2 thương hiệu gồm Bản địa hóa sản phẩm, Tối ưu ứng dụng Loyalty và Tiêu chuẩn ESG."
    ],
    skills: [
      { icon: "📊", name: "Nghiên Cứu Thị Trường & Đào Sâu Data", desc: "Thiết kế bảng hỏi khảo sát định lượng, thực hiện phỏng vấn chuyên sâu 6 tầng nội dung, xử lý & tổng hợp dữ liệu chuẩn học thuật." },
      { icon: "🧠", name: "Phân Tích Định Vị Thương Hiệu (Branding)", desc: "Vận dụng thành thạo mô hình 7P Marketing Mix, SWOT, STP và AIDA để bóc tách chiến lược cạnh tranh giữa hai gã khổng lồ bán lẻ." },
      { icon: "📈", name: "Đọc Hiểu Hành Vi Tiêu Dùng (Consumer Insight)", desc: "Phân tích tâm lý mua hàng ngẫu hứng, các yếu tố giữ chân khách hàng (retention drivers) và xu hướng tiêu dùng Gen Z / Millennial." },
      { icon: "💡", name: "Tư Duy Chiến Lược Bán Lẻ (CVS Strategy)", desc: "Đánh giá hiệu quả mô hình 24/7, chiến lược trưng bày sản phẩm (merchandising), tối ưu hóa trải nghiệm điểm bán (POS experience)." },
      { icon: "✍️", name: "Kỹ Năng Quản Lý & Viết Báo Cáo Chuyên Sâu", desc: "Tổng hợp, cấu trúc hóa và trình bày báo cáo nghiên cứu 160+ trang với tư duy logic, lập luận chặt chẽ và bằng chứng khoa học." }
    ],
    objectives: [
      "Đánh giá và so sánh trải nghiệm sản phẩm & dịch vụ tại Circle K và GS25",
      "Phân tích chiến lược Marketing & xây dựng thương hiệu của hai chuỗi",
      "Đo lường giá trị cạnh tranh trong nhận thức của người tiêu dùng Việt Nam",
      "Đề xuất giải pháp chiến lược để nâng cao nhận thức thương hiệu và hiệu quả kinh doanh"
    ],
    process: [
      "Tổng quan thị trường CVS Việt Nam: Phân tích bối cảnh ngành, xu hướng tăng trưởng 12–15%/năm và vị thế của Circle K (500 cửa hàng) & GS25 (450 cửa hàng)",
      "Nghiên cứu lý thuyết: Phân tích 7P Marketing Mix, SWOT, STP, AIDA cho từng thương hiệu — làm rõ sự khác biệt giữa 'tiện lợi & phủ sóng' (Circle K) vs 'trải nghiệm & văn hóa K-pop' (GS25)",
      "Thu thập dữ liệu sơ cấp: Thiết kế bảng khảo sát online với 4 nhóm biến (hành vi mua sắm, nhận diện thương hiệu, mức độ hài lòng, yếu tố lựa chọn) gửi đến 100+ khách hàng có trải nghiệm thực tế",
      "Quan sát thực địa: Trực tiếp khảo sát nhiều chi nhánh Circle K & GS25 ở các khung giờ khác nhau — ghi nhận không gian cửa hàng, quy trình phục vụ, hành vi khách hàng",
      "Phỏng vấn chuyên sâu (In-depth Interview): Phỏng vấn 6 nhóm nội dung phân tầng từ cảm nhận giác quan → động lực sâu xa → trải nghiệm kỹ thuật số",
      "Phân tích & tổng hợp: Xử lý dữ liệu khảo sát, so sánh đa chiều hai thương hiệu theo 6 tiêu chí cốt lõi, đề xuất chiến lược phát triển bền vững giai đoạn 2025–2030"
    ]
  },

  2: {
    title: "Kế Hoạch Content Facebook & Instagram",
    type: "Kế Hoạch Nội Dung",
    description: "Nghiên cứu khách hàng, đối thủ & định vị thương hiệu; xây dựng content pillar, content angle và lịch nội dung tuần/tháng cho mạng xã hội.",
    duration: "Tháng 05/2026",
    results: "Bản kế hoạch Content • Lịch biên tập 30 ngày • 10 Bài mẫu & Caption",
    tools: ["Canva", "Facebook", "Instagram", "Google Sheets"],
    googleDocUrl: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0",

    findingsTitle: "Định Hướng Nội Dung Nổi Bật",
    findings: [
      "<strong>Content Pillars Chiến Lược:</strong> Phân bổ 4 tuyến nội dung cốt lõi: Giáo dục sản phẩm, Giải trí & Xu hướng, Chứng thực (Social Proof) và <strong>Chuyển đổi trực tiếp</strong>.",
      "<strong>Content Calendar Linh Hoạt:</strong> Thiết lập lịch đăng bài chi tiết theo tuần/tháng với các định dạng đa dạng: <strong>Single Post, Instagram Carousel & Story tương tác</strong>.",
      "<strong>Copywriting & Brand Voice:</strong> Viết caption chuẩn giọng điệu thương hiệu kết hợp <strong>lời kêu gọi hành động (CTA)</strong> giúp tăng tỷ lệ tương tác & chuyển đổi."
    ],
    skills: [
      { icon: "📝", name: "Content Planning & Scheduling", desc: "Lập lịch nội dung khoa học, phân bổ định dạng và thời gian đăng bài tối ưu theo thuật toán mạng xã hội." },
      { icon: "🎯", name: "Content Pillar & Angle", desc: "Nghiên cứu góc nhìn nội dung sáng tạo, đánh trúng tâm lý và nỗi đau của khách hàng mục tiêu." },
      { icon: "💬", name: "Copywriting & Social Engagement", desc: "Soạn thảo tiêu đề gây chú ý, caption lôi cuốn và lời kêu gọi hành động (CTA) chuyển đổi cao." }
    ],
    objectives: [
      "Nghiên cứu thương hiệu, sản phẩm, đối thủ cạnh tranh và chân dung khách hàng mục tiêu",
      "Xây dựng hệ thống Content Pillars & Content Angles rõ ràng cho từng giai đoạn truyền thông",
      "Thiết lập lịch biên tập nội dung (Content Calendar) chi tiết theo tuần hoặc tháng",
      "Tối ưu bài viết, caption, hình ảnh minh họa & story phù hợp với thuật toán Facebook và Instagram"
    ],
    process: [
      "Nghiên cứu thị trường & đối thủ: Phân tích tuyến nội dung của đối thủ và hành vi tương tác của khách hàng trên Social Media",
      "Xác định Mục tiêu & Định vị: Phân chia tỷ lệ nội dung theo phễu marketing (Awareness → Engagement → Conversion)",
      "Lập Content Calendar: Thiết lập lịch đăng bài chi tiết với thời gian, định dạng, tiêu đề & thông điệp cốt lõi",
      "Sáng tạo Nội dung Mẫu: Viết 5–10 bài mẫu hoàn chỉnh kèm thiết kế hình ảnh/carousel minh họa theo chuẩn nhận diện"
    ]
  },

  3: {
    title: "Xây Dựng Bộ Nhận Diện Thương Hiệu Cơ Bản",
    type: "Branding & Visual",
    description: "Nghiên cứu định vị & khách hàng mục tiêu; xây dựng moodboard, bảng màu, kiểu chữ, key visual và ứng dụng nhận diện truyền thông.",
    duration: "Tháng 04/2026",
    results: "Brand Guidelines • Moodboard • Key Visual • Khung bài đăng Social",
    tools: ["Canva", "Google Sheets", "AI Tools"],
    googleDocUrl: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0",

    findingsTitle: "Điểm Nhấn Nhận Diện Thương Hiệu",
    findings: [
      "<strong>Chuẩn Hóa Nhận Diện:</strong> Xây dựng bảng màu chủ đạo/màu phụ cùng <strong>bộ font chữ tiêu chuẩn</strong> đại diện cho tính cách thương hiệu chuyên nghiệp.",
      "<strong>Moodboard & Key Visual Độc Đáo:</strong> Phát triển định hướng hình ảnh nhất quán giúp thương hiệu <strong>nổi bật & ghi dấu ấn</strong> trên mọi ấn phẩm truyền thông.",
      "<strong>Quy Chuẩn Ứng Dụng Đa Kênh:</strong> Đồng bộ thiết kế logo, khung bài đăng social post, banner quảng cáo & poster sự kiện."
    ],
    skills: [
      { icon: "🎨", name: "Visual Identity Design", desc: "Tư duy màu sắc, font chữ và thiết kế Key Visual tạo diện mạo đồng nhất cho thương hiệu." },
      { icon: "📐", name: "Brand Guidelines Standard", desc: "Xây dựng tài liệu quy chuẩn sử dụng thương hiệu trên các kênh số và ấn phẩm in ấn." },
      { icon: "💡", name: "Creative Moodboard & Storytelling", desc: "Chuyển hóa giá trị cốt lõi và tính cách thương hiệu thành hình ảnh trực quan sinh động." }
    ],
    objectives: [
      "Phân tích tính cách thương hiệu và định vị giá trị cốt lõi trong tâm trí khách hàng",
      "Lựa chọn bảng màu chủ đạo, phông chữ và phong cách hình ảnh đại diện",
      "Xây dựng Moodboard & phát triển Key Visual chính cho các chiến dịch truyền thông",
      "Thiết kế ứng dụng nhận diện lên banner, poster, bài đăng mạng xã hội bảo đảm tính nhất quán"
    ],
    process: [
      "Nghiên cứu Insight & Brand DNA: Xác định 3-5 tính cách cốt lõi thương hiệu cần thể hiện qua hình ảnh",
      "Xây dựng Moodboard & Palette: Chọn bảng màu, phối màu chủ đạo & phông chữ tiêu chuẩn",
      "Thiết kế Key Visual: Sáng tạo hình ảnh chủ đạo làm chuẩn mực cho toàn bộ chiến dịch",
      "Ứng dụng Đa nền tảng: Xuất bản bộ khung thiết kế chuẩn kích thước cho Facebook, Instagram và Website"
    ]
  },

  4: {
    title: "Thiết Kế Banner Ads — Tinh Dầu Thiên Nhiên",
    type: "Media & Ad Design",
    description: "Bộ thiết kế banner quảng cáo trực tuyến đa kích thước (GDN / Web Ads) cho thương hiệu Tinh Dầu Thiên Nhiên bao gồm 19 kích thước chuẩn (KV, 300x250, 728x90, 300x600...).",
    duration: "Tháng 03/2026",
    results: "19+ Kích thước Banner Standard • Key Visual • Campaign Banner Ads",
    tools: ["Canva", "GDN Standard", "Facebook Ads", "Web Banner"],
    googleDocUrl: "https://drive.google.com/drive/folders/1FIMbxTAAZG_FNkwCagiJpDGlaQPSqqpy?usp=drive_link",
    buttonText: "Xem Trọn Bộ Ấn Phẩm Thiết Kế (Google Drive) →",

    findingsTitle: "Điểm Nổi Bật Trong Thiết Kế & Quảng Cáo",
    findings: [
      "<strong>Đa Dạng Kích Thước Standard:</strong> Thiết kế trọn bộ <strong>19+ kích thước banner chuẩn</strong> (GDN, Facebook Ads, Web Banner) đáp ứng tối đa mọi vị trí hiển thị trên website và mạng xã hội.",
      "<strong>Phân Cấp Thị Giác Rõ Ràng:</strong> Tối ưu vị trí Key Visual, thông điệp cốt lõi, logo thương hiệu và nút <strong>Call-To-Action (CTA)</strong> giúp gia tăng <strong>tỷ lệ nhấp (CTR)</strong> của khách hàng.",
      "<strong>Đồng Bộ Nhận Diện Thương Hiệu:</strong> Chuẩn hóa màu sắc chủ đạo, font chữ và hình ảnh sản phẩm Tinh Dầu Thiên Nhiên mang lại cảm giác <strong>thư giãn, thiên nhiên và vô cùng cao cấp</strong>."
    ],
    skills: [
      { icon: "🎨", name: "Canva Media & Graphic Design", desc: "Tạo hình ảnh truyền thông chất lượng cao, bài đăng mạng xã hội, poster & banner quảng cáo." },
      { icon: "🖼️", name: "Ad Banner & Poster Layout", desc: "Sắp xếp bố cục hình ảnh, thông điệp và điểm nhấn thị giác tối ưu tỷ lệ nhấp (CTR)." },
      { icon: "📱", name: "Multi-Platform Format Adapting", desc: "Tối ưu dung lượng và kích thước ấn phẩm chuẩn nét cho từng kênh mạng xã hội." }
    ],
    objectives: [
      "Thiết kế hệ thống ấn phẩm truyền thông cho sự kiện, chương trình khuyến mãi và quảng cáo trực tuyến",
      "Sản xuất bài đăng dạng Instagram Carousel và ảnh bìa Fanpage thu hút thị giác",
      "Bảo đảm bố cục rõ ràng, phân cấp thông tin hợp lý và nhất quán với nhận diện thương hiệu"
    ],
    process: [
      "Tiếp nhận Brief & Thông điệp: Xác định mục tiêu hình ảnh (Giới thiệu sản phẩm, Đẩy bán hay Branding)",
      "Phác thảo Bố cục (Layouting): Sắp xếp vị trí tiêu đề, hình ảnh sản phẩm và nút Call-To-Action",
      "Thiết kế Ấn phẩm: Hoàn thiện ấn phẩm tĩnh và carousel đa trang trên Canva",
      "Xuất bản & Tối ưu: Kiểm tra hiển thị thực tế trên di động và xuất file chuẩn độ phân giải"
    ]
  },

  5: {
    title: "Viết Bài Chuẩn SEO Chuyên Sâu",
    type: "SEO Content Writing",
    description: "Nghiên cứu từ khóa & search intent; xây dựng dàn ý cấu trúc H1-H3; viết và tối ưu bài viết chuẩn SEO tăng thứ hạng tự nhiên.",
    duration: "Tháng 02/2026",
    results: "Bài viết SEO Hoàn chỉnh • Bộ Từ khóa & Intent • Dàn ý H1-H3 chuẩn",
    tools: ["Google Sheets", "AI Tools", "Canva"],
    googleDocUrl: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0",

    findings: [
      "Phân tích chính xác ý định tìm kiếm (Search Intent) giúp xây dựng nội dung giải quyết đúng thắc mắc của người dùng.",
      "Triển khai cấu trúc H1, H2, H3 mạch lạc, phân bổ từ khóa chính & từ khóa liên quan tự nhiên không gây chán.",
      "Tối ưu Meta Title, Meta Description, ảnh minh họa Alt tag, Internal Link và CTA kêu gọi hành động hiệu quả."
    ],
    skills: [
      { icon: "🔎", name: "Keyword & Search Intent Research", desc: "Nghiên cứu từ khóa ngành, phân loại nhóm ý định tìm kiếm và xây dựng Topic Cluster." },
      { icon: "✍️", name: "SEO Structure Writing (H1-H3)", desc: "Xây dựng dàn ý bài viết chuẩn SEO, triển khai nội dung hữu ích, dễ đọc và giữ chân độc giả lâu hơn." },
      { icon: "🔗", name: "On-Page SEO Optimization", desc: "Tối ưu Meta tags, ảnh Alt, liên kết nội bộ (Internal link) và giọng điệu thương hiệu độc đáo." }
    ],
    objectives: [
      "Nghiên cứu từ khóa chính, từ khóa phụ và phân tích ý định tìm kiếm của người dùng (Search Intent)",
      "Xây dựng dàn ý bài viết cấu trúc H1, H2, H3 logic, mạch lạc và dễ đọc",
      "Viết tiêu đề chuẩn SEO, đoạn mô tả (Meta Description) hấp dẫn kích thích tỷ lệ nhấp (CTR)",
      "Tối ưu hình ảnh, liên kết nội bộ và lời kêu gọi hành động (CTA) giữ chân người đọc"
    ],
    process: [
      "Nghiên cứu Từ khóa: Chọn từ khóa có lượng tìm kiếm tốt và độ cạnh tranh phù hợp",
      "Xây dựng Dàn ý (Outline): Lập cấu trúc thẻ H1, H2, H3 bao phủ toàn bộ câu hỏi của người dùng",
      "Triển khai Nội dung: Viết văn bản chi tiết, phân bổ từ khóa tự nhiên và chèn ảnh minh họa chuẩn Alt",
      "Rà soát On-page: Kiểm tra mượt mà giọng văn, đọc thử trên di động và hoàn thiện các liên kết CTA"
    ]
  }
};

// ================== CÁC CHỨC NĂNG ĐIỀU KHIỂN ==================

function goToProject(projectId) {
  window.location.href = `project-detail.html?id=${projectId}`;
}

function getProjectFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Hiệu ứng cuộn mượt
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Hiệu ứng hover thẻ dự án
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => { card.style.transform = 'translateY(-12px)'; });
  card.addEventListener('mouseleave', () => { card.style.transform = 'translateY(0)'; });
});

console.log('%cWebsite Portfolio của Khương Tuấn Anh đã load thành công!', 'color: #2c3e50; font-family: Inter; font-weight: bold;');
