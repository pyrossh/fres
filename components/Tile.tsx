export default function Tile(
  { title, value }: { title: string; value: string },
) {
  return (
    <div class="metric green clickable">
      <div class="mb-4">
        <h2 class="text-lg font-medium">{title}</h2>
      </div>
      <div>
        <div class="sum">{value}</div>
      </div>
    </div>
  );
}
