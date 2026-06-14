const SectiontitleBadge = ({ title }: { title: string }) => {
  return (
    <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
      {title}
    </span>
  );
};

export default SectiontitleBadge;
