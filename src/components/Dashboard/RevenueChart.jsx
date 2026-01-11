import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
function RevenueChart() {
  const data = [
    { month: "Jan", revenue: 45000, expenses: 24000 },
    { month: "Feb", revenue: 30000, expenses: 13980 },
    { month: "Mar", revenue: 20000, expenses: 98000 },
    { month: "Apr", revenue: 27800, expenses: 39080 },
    { month: "May", revenue: 18900, expenses: 48000 },
    { month: "Jun", revenue: 23900, expenses: 38000 },
    { month: "Jul", revenue: 34900, expenses: 43000 },
    { month: "Aug", revenue: 40000, expenses: 24000 },
    { month: "Sep", revenue: 30000, expenses: 13980 },
    { month: "Oct", revenue: 20000, expenses: 98000 },
    { month: "Nov", revenue: 27800, expenses: 39008 },
    { month: "Dec", revenue: 18900, expenses: 48000 },
  ];
  return (
    <div
      className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl
    border border-slate-200/50 dark:border-slate-700/50 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            Revenue Chart
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Monthly Revenue and expenses{" "}
          </p>
        </div>

        <div className="flex items-center space-x-4 ">
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 bg-linear-to-r from-blue-500 to-purple-600
            rounded-full"
            >
              {" "}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <span>Revenue</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 bg-linear-to-r from-slate-400 to-slate-500
            rounded-full"
            >
              {" "}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <span>Expenses</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />

            <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 12 }} />

            <YAxis tick={{ fill: "#64748b", fontSize: 12 }} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                borderRadius: "12px",
                border: "none",
                color: "#fff",
              }}
              cursor={{ fill: "rgba(148,163,184,0.1)" }}
            />

            <Bar
              dataKey="revenue"
              radius={[10, 10, 0, 0]}
              fill="url(#revenueGradient)"
            />

            <Bar
              dataKey="expenses"
              radius={[10, 10, 0, 0]}
              fill="url(#expenseGradient)"
            />

            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>

              <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;
