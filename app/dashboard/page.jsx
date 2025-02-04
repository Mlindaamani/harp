import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="d-flex gap-5 justify-content-between align-items-center bg-light p-5 rounded-4 mt-3">
        <h1 className="text-secondary">Analytics</h1>

        {/* Analytics Cards */}
        <div className="d-flex gap-5 justify-content-between align-items-center">
          <div className="card-skeleton bg-secondary rounded-4 p-4 d-flex justify-content-between align-items-center gap-3">
            <h3 className="text-warning">10</h3>
            <p className="text-light">Projects</p>
          </div>
          <div className="card-skeleton bg-secondary rounded-4 p-4 d-flex justify-content-between align-items-center gap-3">
            <h3 className="text-warning">5</h3>
            <p className="text-light">Tasks</p>
          </div>
          <div className="card-skeleton bg-secondary rounded-4 p-4 d-flex justify-content-between align-items-center gap-3">
            <h3 className="text-warning">2</h3>
            <p className="text-light">Users</p>
          </div>
        </div>
      </div>

      {/* Chart Skeletons */}
      <div className="d-flex flex-column gap-4 mt-4">
        <div className="row g-4">
          <div className="col-lg-8 col-md-12">
            <div className="chart-skeleton bg-light rounded-4 p-4">
              <h4 className="text-muted">Total Income</h4>
              <div className="skeleton-box large rounded-5" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="chart-skeleton bg-light rounded-4 p-4">
              <h4 className="text-muted">Service Provider Avaliability</h4>
              <div className="skeleton-box small rounded-5" />
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-12">
            <div className="chart-skeleton bg-light rounded-4 p-4">
              <h4 className="text-muted">Most Visited Locations</h4>
              <div className="skeleton-box small rounded-5" />
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="chart-skeleton bg-light rounded-4 p-4">
              <h4 className="text-muted">Household Reached</h4>
              <div className="skeleton-box large rounded-5" />
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-8 col-md-12">
            <div className="chart-skeleton bg-light rounded-4 p-4">
              <h4 className="text-muted">Total Clients</h4>
              <div className="skeleton-box large rounded-5" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="chart-skeleton bg-light rounded-4 p-4">
              <h4 className="text-muted">Total Revenue</h4>
              <div className="skeleton-box small rounded-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
