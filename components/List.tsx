import { AnalyticsDataPoint } from "../services/analytics.ts";

type ListProps = { title: string; entries: AnalyticsDataPoint[] };

export default function List({ title, entries }: ListProps) {
  return (
    <div class="bg-white p-6 rounded-lg">
      <div>
        <h2 class="text-black text-lg font-medium">{title}</h2>
      </div>
      <div class="mt-4 px-3">
        {entries.map((entry) => (
          <div class="flex my-2">
            <div>
              <span class="text-base font-medium">{entry.name}</span>
            </div>
            <div class="flex-1 flex justify-end">
              <i class="icon icon-follow clickable"></i>
              <span class="text-base font-medium">
                {entry.count.toString()}
              </span>
            </div>
            <div class="division"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
