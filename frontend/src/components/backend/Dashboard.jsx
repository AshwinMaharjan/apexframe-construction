import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";

const Dashboard = () => {
  const stats = [
    { label: "Total Projects",   value: "24",   icon: "🏗️" },
    { label: "Active Services",  value: "8",    icon: "⚙️" },
    { label: "Published Articles", value: "16", icon: "📝" },
    { label: "Total Inquiries",  value: "132",  icon: "📬" },
  ];

  const recentProjects = [
    { name: "Luxury Villa Construction",    status: "Completed",  date: "12 May 2026" },
    { name: "Modern Office Complex",        status: "In Progress", date: "20 May 2026" },
    { name: "Commercial Shopping Center",   status: "Completed",  date: "02 Apr 2026" },
    { name: "Interior Renovation Project",  status: "Pending",    date: "25 May 2026" },
    { name: "Residential Apartment Block",  status: "In Progress", date: "18 May 2026" },
  ];

  const recentArticles = [
    { title: "Modern Construction Trends in 2026",          date: "10 May 2026" },
    { title: "How Quality Materials Improve Durability",     date: "04 May 2026" },
    { title: "Essential Safety Practices on Sites",          date: "28 Apr 2026" },
    { title: "Green Construction: Building for the Future",  date: "21 Apr 2026" },
  ];

  const statusClass = (status) => {
    if (status === "Completed")  return "badge badge--green";
    if (status === "In Progress") return "badge badge--amber";
    return "badge badge--gray";
  };

  return (
    <>
      <Header />
      <main className="dashboard-layout">
        <Sidebar />

        <div className="dashboard-main">
          <div className="dashboard-inner">

            {/* Page heading */}
            <div className="dashboard-heading">
              <div>
                <span>Admin Panel</span>
                <h2>Dashboard</h2>
              </div>
              <p className="dashboard-date">Monday, 25 May 2026</p>
            </div>

            {/* Stats row */}
            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-card__icon">{stat.icon}</div>
                  <div className="stat-card__body">
                    <span className="stat-card__value">{stat.value}</span>
                    <span className="stat-card__label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Two column content */}
            <div className="dashboard-grid">

              {/* Recent Projects */}
              <div className="dash-card">
                <div className="dash-card__header">
                  <h3>Recent Projects</h3>
                  <a href="/projects">View All →</a>
                </div>
                <div className="dash-card__body">
                  <table className="dash-table">
                    <thead>
                      <tr>
                        <th>Project Name</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentProjects.map((p) => (
                        <tr key={p.name}>
                          <td>{p.name}</td>
                          <td>{p.date}</td>
                          <td>
                            <span className={statusClass(p.status)}>
                              {p.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Articles */}
              <div className="dash-card">
                <div className="dash-card__header">
                  <h3>Recent Articles</h3>
                  <a href="/blogs">View All →</a>
                </div>
                <div className="dash-card__body">
                  <ul className="article-list">
                    {recentArticles.map((a) => (
                      <li key={a.title} className="article-list__item">
                        <div className="article-list__icon">📄</div>
                        <div className="article-list__detail">
                          <span className="article-list__title">{a.title}</span>
                          <span className="article-list__date">{a.date}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Actions */}
                <div className="dash-card__header" style={{ marginTop: "1.5rem" }}>
                  <h3>Quick Actions</h3>
                </div>
                <div className="quick-actions">
                  <a href="/projects" className="quick-btn">＋ New Project</a>
                  <a href="/blogs"    className="quick-btn">＋ New Article</a>
                  <a href="/services" className="quick-btn">＋ New Service</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;