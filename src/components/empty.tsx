export const Empty = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          Welcome to Daily Tasks Report 👋
        </h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no Employee Selected
          </h3>
          <p className="text-sm text-muted-foreground">
            Please select an employee to view their tasks
          </p>
        </div>
      </div>
    </main>
  );
};
