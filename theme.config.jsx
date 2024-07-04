export default {
    logo: <span>☕️ Homebrew</span>,
    project: {
        link: 'https://github.com/janhq'
    },
    chat: {
        link: 'https://discord.gg/VSbRN3vwCD',
    },
    docsRepositoryBase: "https://github.com/janhq/homebrew/tree/main",
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Homebrew'
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Homebrew" />
            <meta property="og:description" content="Open Source, AI R&D Lab" />
        </>
    ),
    navigation: {
        prev: true,
        next: true
    },
    footer: {
        text: (
            <span>
                Apache 2.0 {new Date().getFullYear()} ©{' '}
                <a href="https://nextra.site" target="_blank">
                    Homebrew Computer Company Pte Ltd.
                </a>
                .
            </span>
        )
    },
    faviconGlyph: "☕️"
    // ... other theme options
}