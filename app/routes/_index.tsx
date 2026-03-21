import { ThemeProvider } from '@rescui/ui-contexts';
import { HeaderSection } from "../components/header-section";
import { LatestFromKotlinSection } from "../components/latest-from-kotlin-section";
import { WhyKotlinSection } from "../components/why-kotlin-section";
import { UsageSection } from "../components/usage-section";
import { StartSection } from "../components/start-section";

export default function Index() {
  return (
    <ThemeProvider theme="dark">
      <div className="overview-page">
        <HeaderSection />
        <LatestFromKotlinSection />
        <WhyKotlinSection />
        <UsageSection />
        <StartSection />
      </div>
    </ThemeProvider>
  );
}
