
module.exports = {
  someSidebar: {
    "Introduction": [
        "framework-introduction",
        "framework-roadmap"
    ],
    "Framework": [
        "package-core",
        {
            "type": "category",
            "label": "Database",
            "items": [
                "package-mongo",
                "package-nova"
            ]
        },
        "package-logger",
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
        "package-emails",
        "package-terminal",
        "package-validator-bundle"
    ],
    "X-way": [
        "x-way-introduction",
        "x-way-conventions",
        "package-x-bundle",
        "package-x-password-bundle",
        "package-x-generator-bundle"
    ]
}
}
