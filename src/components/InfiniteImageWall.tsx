const ROW1 = [
  { src: '/images/thumbs/cockpit-overview.png', alt: '数据驾驶舱' },
  { src: '/images/thumbs/evaluation-students.png', alt: '学生评价' },
  { src: '/images/thumbs/grading-detail-scoring.png', alt: '智能阅卷' },
  { src: '/images/thumbs/alert-list.png', alt: '预警列表' },
  { src: '/images/thumbs/classroom-attendance-detail.png', alt: '考勤管理' },
  { src: '/images/thumbs/ai-chat-desktop.jpg', alt: 'AI 助手' },
  { src: '/images/thumbs/analysis-1.png', alt: '学情分析' },
];

const ROW2 = [
  { src: '/images/thumbs/evaluation-categories.png', alt: '评价维度' },
  { src: '/images/thumbs/grading-report-overview.png', alt: '成绩报告' },
  { src: '/images/thumbs/question-bank-list.png', alt: '题库管理' },
  { src: '/images/thumbs/cockpit-drilldown-1.png', alt: '数据下钻' },
  { src: '/images/thumbs/classroom-homework-grading.png', alt: '作业批改' },
  { src: '/images/thumbs/evaluation-profile.png', alt: '学生画像' },
  { src: '/images/thumbs/grading-structure-rubric.png', alt: '评分标准' },
];

const ROW3 = [
  { src: '/images/thumbs/analysis-3.png', alt: '成绩对比' },
  { src: '/images/thumbs/alert-detail.png', alt: '预警详情' },
  { src: '/images/thumbs/teaching-quality.png', alt: '教学质量' },
  { src: '/images/thumbs/cockpit-students.png', alt: '学生总览' },
  { src: '/images/thumbs/cockpit-drilldown-2.png', alt: '班级下钻' },
  { src: '/images/thumbs/question-bank-detail.png', alt: '题目详情' },
  { src: '/images/thumbs/analysis-5.png', alt: '知识点分析' },
];

type ImageItem = { src: string; alt: string };

function ScrollRow({
  images,
  duration,
  reverse = false,
  delay = 0,
}: {
  images: ImageItem[];
  duration: number;
  reverse?: boolean;
  delay?: number;
}) {
  const items = [...images, ...images];
  const animName = reverse ? 'scroll-right' : 'scroll-left';

  return (
    <div className="relative overflow-hidden">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white/80 to-transparent pointer-events-none" />

      <div
        className="flex gap-3.5 will-change-transform"
        style={{
          animation: `${animName} ${duration}s linear ${delay}s infinite both`,
        }}
      >
        {items.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="flex-shrink-0 w-[300px] rounded-xl overflow-hidden shadow-[0_2px_16px_-4px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.04] bg-white"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-[160px] object-cover object-top"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function InfiniteImageWall() {
  return (
    <div className="infinite-image-wall w-screen flex flex-col gap-3">
      <ScrollRow images={ROW1} duration={40} />
      <ScrollRow images={ROW2} duration={48} reverse />
      <ScrollRow images={ROW3} duration={44} />
    </div>
  );
}
