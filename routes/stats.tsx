import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import List from "../components/List.tsx";
import Tile from "../components/Tile.tsx";
import { AnalyticsData, getAnalyticsData } from "../services/analytics.ts";

export const handler: Handlers<AnalyticsData> = {
  async GET(_req, ctx) {
    const data = await getAnalyticsData();
    return ctx.render(data);
  },
};

export default function Stats({ data }: PageProps<AnalyticsData>) {
  return (
    <div class="flex flex-1 flex-col theme-light">
      <div class="py-4 text-lg font-medium text-gray-800">Dashboard</div>
      <div class="charts no-select hidden">
        <div class="headline">
          <div class="metrics">
            <Tile title="Page Visitors" value={data.vistors.toString()} />
            <Tile title="Page Views" value={data.views.toString()} />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <List title="Pages" entries={data.pages} />
        <List title="Countries" entries={data.countries} />
      </div>
      <div class="grid grid-cols-2 gap-8 mt-8">
        <List title="OS" entries={data.os} />
        <List title="Browsers" entries={data.browsers} />
      </div>
    </div>
  );
}
