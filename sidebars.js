
module.exports = {
  someSidebar: {
    "Introduction": [
        "framework-introduction"
    ],
    "Framework": [
        "package-core",
        "package-validator",
        "package-logger",
        "package-terminal",
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
                "package-loader",
                "package-executor",
                "package-apollo",
                "package-apollo-security"
            ]
        },
        "package-emails"
    ],
    "X Way": [
        "package-x-bundle",
        "package-x-password-bundle",
        "package-x-generator-bundle"
    ]
}
}
