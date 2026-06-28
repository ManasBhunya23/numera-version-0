import Hero from "../components/Report/Hero/Hero";
import Overview from "../components/Report/Overview/Overview";
import Navbar from "../components/Navbar/Navbar";
import Starfield from "../components/Background/Starfield";
import Analysis from "../components/Report/Analysis/Analysis";
import Insights from "../components/Report/Insights/Insights";
import Recommendations from "../components/Report/Recommendations/Recommendations";
import Summary from "../components/Report/Summary/Summary";
import Download from "../components/Report/Download/Download";
import Patterns from "../components/Report/Patterns/Patterns";
import mockReport from "../data/mockReport";

export default function Report() {

    const report = mockReport;

    return (

        <main className="report-page">

            <Hero report={report} />

            <Overview report={report} />

            <Analysis report={report} />

            <Insights report={report} />

            <Patterns report={report}/>

            <Recommendations report={report} />

            <Summary report={report} />

            <Download report={report} />

        </main>

    );

}