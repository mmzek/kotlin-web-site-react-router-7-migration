import { useEffect, useState, type ComponentType } from 'react';

type HeaderSearchConfig = {
    searchAlgoliaId?: string;
    searchAlgoliaApiKey?: string;
    searchAlgoliaIndexName?: string;
};

type HeaderProps = Record<string, unknown> & {
    searchConfig?: HeaderSearchConfig;
};

type HeaderComponentType = ComponentType<HeaderProps>;

const defaultSearchConfig: HeaderSearchConfig = {
    searchAlgoliaId: '',
    searchAlgoliaApiKey: '',
    searchAlgoliaIndexName: '',
};

export function HeaderSection(props: HeaderProps) {
    const [GlobalHeader, setGlobalHeader] = useState<HeaderComponentType | null>(null);

    useEffect(() => {
        let isMounted = true;

        Promise.all([
            import('@jetbrains/kotlin-web-site-ui/out/components/header/index.js'),
            import('@jetbrains/kotlin-web-site-ui/out/components/header/index.css'),
            import('@jetbrains/kotlin-web-site-ui/out/components/common/index.css'),
            import('@jetbrains/kotlin-web-site-ui/out/components/layout/index.css'),
            import('@jetbrains/kotlin-web-site-ui/out/components/typography/index.css'),
            import('@rescui/icons/lib/index.css'),
        ]).then(([headerModule]) => {
            if (isMounted) {
                setGlobalHeader(() => headerModule.default as HeaderComponentType);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    if (!GlobalHeader) {
        return null;
    }

    return <GlobalHeader {...props} searchConfig={props.searchConfig ?? defaultSearchConfig} />;
}

export default HeaderSection;