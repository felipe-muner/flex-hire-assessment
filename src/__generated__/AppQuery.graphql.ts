/**
 * @generated SignedSource<<504a2e40da188a819cd0b45de8f6a6bf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type JobStatus = "closed" | "deleted" | "draft" | "opened" | "template" | "%future added value";
export type AppQuery$variables = Record<PropertyKey, never>;
export type AppQuery$data = {
  readonly currentUser: {
    readonly answers: ReadonlyArray<{
      readonly answer: {
        readonly video: {
          readonly question: {
            readonly title: string | null | undefined;
          } | null | undefined;
          readonly url: string;
        } | null | undefined;
      } | null | undefined;
    }> | null | undefined;
    readonly avatarUrl: string | null | undefined;
    readonly jobOpportunities: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly firm: {
            readonly name: string | null | undefined;
          } | null | undefined;
          readonly id: string;
          readonly questions: ReadonlyArray<{
            readonly title: string | null | undefined;
            readonly videoAnswer: {
              readonly video: {
                readonly url: string;
              } | null | undefined;
            } | null | undefined;
          }> | null | undefined;
          readonly status: JobStatus | null | undefined;
          readonly title: string;
          readonly user: {
            readonly avatarUrl: string | null | undefined;
            readonly email: string | null | undefined;
            readonly name: string | null | undefined;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly name: string | null | undefined;
    readonly userSkills: ReadonlyArray<{
      readonly experience: number | null | undefined;
      readonly skill: {
        readonly name: string | null | undefined;
      } | null | undefined;
    }> | null | undefined;
  } | null | undefined;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = [
  (v0/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "experience",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v10 = [
  (v0/*: any*/),
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Video",
            "kind": "LinkedField",
            "name": "answers",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Answer",
                "kind": "LinkedField",
                "name": "answer",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Video",
                    "kind": "LinkedField",
                    "name": "video",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Question",
                        "kind": "LinkedField",
                        "name": "question",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UserSkill",
            "kind": "LinkedField",
            "name": "userSkills",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Skill",
                "kind": "LinkedField",
                "name": "skill",
                "plural": false,
                "selections": (v4/*: any*/),
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "JobConnection",
            "kind": "LinkedField",
            "name": "jobOpportunities",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JobEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Job",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v3/*: any*/),
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Firm",
                        "kind": "LinkedField",
                        "name": "firm",
                        "plural": false,
                        "selections": (v4/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v0/*: any*/),
                          (v9/*: any*/),
                          (v1/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Question",
                        "kind": "LinkedField",
                        "name": "questions",
                        "plural": true,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Answer",
                            "kind": "LinkedField",
                            "name": "videoAnswer",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Video",
                                "kind": "LinkedField",
                                "name": "video",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "jobOpportunities(first:10)"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Video",
            "kind": "LinkedField",
            "name": "answers",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Answer",
                "kind": "LinkedField",
                "name": "answer",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Video",
                    "kind": "LinkedField",
                    "name": "video",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Question",
                        "kind": "LinkedField",
                        "name": "question",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UserSkill",
            "kind": "LinkedField",
            "name": "userSkills",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Skill",
                "kind": "LinkedField",
                "name": "skill",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              (v5/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "JobConnection",
            "kind": "LinkedField",
            "name": "jobOpportunities",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JobEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Job",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v3/*: any*/),
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Firm",
                        "kind": "LinkedField",
                        "name": "firm",
                        "plural": false,
                        "selections": (v10/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v0/*: any*/),
                          (v9/*: any*/),
                          (v1/*: any*/),
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Question",
                        "kind": "LinkedField",
                        "name": "questions",
                        "plural": true,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Answer",
                            "kind": "LinkedField",
                            "name": "videoAnswer",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Video",
                                "kind": "LinkedField",
                                "name": "video",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  (v7/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "jobOpportunities(first:10)"
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "28eb04b586926c2dd04fa3d1eaacbab5",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  currentUser {\n    name\n    avatarUrl\n    answers {\n      answer {\n        video {\n          url\n          question {\n            title\n            id\n          }\n          id\n        }\n        id\n      }\n      id\n    }\n    userSkills {\n      skill {\n        name\n        id\n      }\n      experience\n      id\n    }\n    jobOpportunities(first: 10) {\n      edges {\n        node {\n          id\n          title\n          status\n          firm {\n            name\n            id\n          }\n          user {\n            name\n            email\n            avatarUrl\n            id\n          }\n          questions {\n            title\n            videoAnswer {\n              video {\n                url\n                id\n              }\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c9c590da91e6c53d92ffb00b56e0223a";

export default node;
