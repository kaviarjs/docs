
module.exports = {
  someSidebar: {
    "Meta": [
        "framework-introduction",
        "framework-roadmap"
    ],
    "Foundation": [
        "package-core",
        "package-emails",
        "package-validator-bundle",
        "package-logger",
        {
            "type": "category",
            "label": "Database",
            "items": [
                "package-mongo",
                "package-nova"
            ]
        },
        {
            "type": "category",
            "label": "Security",
            "items": [
                "package-security",
                "package-security-mongo",
                "package-password-bundle"
            ]
        },
        {
            "type": "category",
            "label": "GraphQL",
            "items": [
                "package-graphql",
                "package-apollo",
                "package-apollo-security"
            ]
        },
        "package-terminal"
    ],
    "X-Framework": [
        "x-framework-introduction",
        "package-x-bundle",
        "package-x-ui",
        "package-x-generator-bundle",
        "package-x-password-bundle",
        "x-framework-conventions"
    ]
}
}
