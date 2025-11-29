import { statusCounts } from "@/data/mockData";

const StatusGrid = () => {
  const statusItems = [
    {
      label: "Đang trống",
      count: statusCounts.vacant,
      dotColor: "status-vacant",
      bgColor: "bg-status-vacant/5",
      borderColor: "border-status-vacant/20",
    },
    {
      label: "Đang bán",
      count: statusCounts.onSale,
      dotColor: "status-on-sale",
      bgColor: "bg-status-on-sale/5",
      borderColor: "border-status-on-sale/20",
    },
    {
      label: "Sắp trống",
      count: statusCounts.upcoming,
      dotColor: "status-upcoming",
      bgColor: "bg-status-upcoming/5",
      borderColor: "border-status-upcoming/20",
    },
    {
      label: "Đang thuê",
      count: statusCounts.rented,
      dotColor: "status-rented",
      bgColor: "bg-status-rented/5",
      borderColor: "border-status-rented/20",
    },
  ];

  return (
    <section className="px-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <h2 className="font-semibold text-foreground mb-3">Tổng quan trạng thái</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {statusItems.map((item, index) => (
          <div
            key={item.label}
            className={`${item.bgColor} ${item.borderColor} border rounded-xl p-4 text-center animate-scale-in`}
            style={{ animationDelay: `${400 + index * 50}ms` }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className={`status-dot ${item.dotColor}`} />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{item.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatusGrid;
