import GlobalFooter from '@jetbrains/kotlin-web-site-ui/out/components/footer/index.js';
import '@jetbrains/kotlin-web-site-ui/out/components/footer/index.css';
import { ThemeProvider } from '@rescui/ui-contexts';

type FooterProps = Record<string, unknown>;

export function Footer(props: FooterProps) {
    return (
        <ThemeProvider theme="dark">
            <GlobalFooter {...props} />
        </ThemeProvider>
    );
}

export default Footer;