
module.exports = {
  someSidebar: {
    "Meta": [
        "framework-introduction"
    ],
    "Foundation": [
        "package-core",
        "package-emails",
        "package-validator-bundle",
        "package-logger",
        "package-ejson",
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
        {
            "type": "category",
            "label": "Server",
            "items": [
                "package-x-bundle",
                "package-x-generator-bundle",
                "package-x-cron-bundle",
                "package-x-password-bundle",
                "package-x-s3-uploads",
                "x-framework-conventions"
            ]
        },
        {
            "type": "category",
            "label": "UI",
            "items": [
                "package-x-ui",
                "package-x-ui-admin",
                "package-smart"
            ]
        }
    ]
}
}
