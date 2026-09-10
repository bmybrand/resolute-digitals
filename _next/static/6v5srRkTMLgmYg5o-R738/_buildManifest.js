self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "has": [
          {
            "type": "query",
            "key": "action",
            "value": "catalog"
          }
        ],
        "source": "/api/muslim-app-subscription.php"
      },
      {
        "has": [
          {
            "type": "query",
            "key": "action",
            "value": "ewallet"
          }
        ],
        "source": "/api/muslim-app-subscription.php"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()