import React from "react";
import WorkItem from "./Workitem";

const data = [
  {
    year: 2024,
    title: "Sales Operations Analyst",
    duration: "3 Months",
    details:
      "Revamped Revenue and Margin SAP Analytics dashboard for Wholesale Teams.  Streamlined the reporting process and added more data points and metrics to the report that gave management and sales more insights into performance.  Accurately and efficiently processed third party Indirect reports. Incorporated data cleansing measures and new processes to streamline the reporting process from 5 hours to 2 hours.",
  },
  {
    year: 2023,
    title: "Sales Operations Analyst",
    duration: "1 Year and 4 Months",
    details:
      "Optimized Point of Sale (POS) and Inventory reports by reducing processing time from 5 days to 2 days, giving leadership and sales team to improve sales and customer response rates.  Cleansed data, joined multiple data points and configured data structures in Alteryx to streamline processing time and improve accuracy.  Created sales dashboards, models and stories in SAP Analytics Cloud utilizing direct/CORS connection and/or spreadsheets resulting in responsive and insightful reports.  Breakdown by product performance, revenue/margin trends, and historical comparisons.",
  },
  {
    year: 2022,
    title: "Sales Operations Manager",
    duration: "2 Years and 9 Months",
    details:
      "Deployed the first ever CRM (MS D365) platform at the company allowing sales teams to view leads, account information and performance in real-time.  Delivered sales commissions accurately and timely increasing trust amongst sales and sales operations and allowing the team to refocus on increasing efficiency and sales.  Built KPI dashboards allowing for transparency in performance and competitiveness with sales team.  Developed and managed territories, quotas by diversifying sales reps’ book of business and allowing for additional headcounts.",
  },
  {
    year: 2019,
    title: "Senior Operations Analyst",
    duration: "3 Years and 3 Months",
    details:
      "Join multiple data sources utilizing SQL queries through multiple data tables and Salesforce to Construct multiple revenue/margin dashboards reported globally for the company - U.S., EMEA and Japan, giving the sales and account management teams visibility into their clients’ performance.  Created Quarterly Business Reviews for all Strategic Account Managers and Executive level management by utilizing multiple data sources such as MicroStrategy, MetaMarkets and by collaborating with multiple teams on formatting, layout and data presentation.  Increased revenue by analyzing and identifying new sources of revenue opportunities through PMP, additional targeting and traffic sources.",
  },
  {
    year: 2016,
    title: "Team Lead, Campaign Management",
    duration: "3 Years and 4 Months",
    details:
      "Managed all East Coast and Vertical video ad campaigns, totalling millions in revenue for Q1 by utilizing multiple networks (internal & external) and managing performance for entire flight of the campaign.  Exceeded internal and client goals by optimizing ad campaign performance by utilizing advanced targeting, multiple traffic sources and testing (multi-variant or A/B testing).  Orchestrated the development and production of a new video ad delivery platform by collaborating with Engineering and Management, creation of new functions, testing new features, and UX optimization.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
      ))}
    </div>
  );
};

export default Work;
