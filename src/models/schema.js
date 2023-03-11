export const schema = {
    "models": {
        "Information": {
            "name": "Information",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "FullName": {
                    "name": "FullName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "RepID": {
                    "name": "RepID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Date": {
                    "name": "Date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "untitledfield": {
                    "name": "untitledfield",
                    "isArray": false,
                    "type": {
                        "nonModel": "Answer1"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Information",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "Answer8": {
            "name": "Answer8",
            "fields": {
                "Answer": {
                    "name": "Answer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Answer8": {
                    "name": "Answer8",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Answer7": {
            "name": "Answer7",
            "fields": {
                "Answer": {
                    "name": "Answer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Answer7": {
                    "name": "Answer7",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "untitledfield": {
                    "name": "untitledfield",
                    "isArray": false,
                    "type": {
                        "nonModel": "Answer8"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Answer6": {
            "name": "Answer6",
            "fields": {
                "Answer": {
                    "name": "Answer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Answer6": {
                    "name": "Answer6",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "untitledfield": {
                    "name": "untitledfield",
                    "isArray": false,
                    "type": {
                        "nonModel": "Answer7"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Answer5": {
            "name": "Answer5",
            "fields": {
                "Answer": {
                    "name": "Answer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Answer5": {
                    "name": "Answer5",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "untitledfield": {
                    "name": "untitledfield",
                    "isArray": false,
                    "type": {
                        "nonModel": "Answer6"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Answer4": {
            "name": "Answer4",
            "fields": {
                "Answer": {
                    "name": "Answer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Answer4": {
                    "name": "Answer4",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "untitledfield": {
                    "name": "untitledfield",
                    "isArray": false,
                    "type": {
                        "nonModel": "Answer5"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Answer3": {
            "name": "Answer3",
            "fields": {
                "Answer": {
                    "name": "Answer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Answer3": {
                    "name": "Answer3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "untitledfield": {
                    "name": "untitledfield",
                    "isArray": false,
                    "type": {
                        "nonModel": "Answer4"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Answer2": {
            "name": "Answer2",
            "fields": {
                "Answer": {
                    "name": "Answer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Answer2": {
                    "name": "Answer2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "untitledfield": {
                    "name": "untitledfield",
                    "isArray": false,
                    "type": {
                        "nonModel": "Answer3"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Answer1": {
            "name": "Answer1",
            "fields": {
                "Answer": {
                    "name": "Answer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Answer1": {
                    "name": "Answer1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "untitledfield": {
                    "name": "untitledfield",
                    "isArray": false,
                    "type": {
                        "nonModel": "Answer2"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.3.6",
    "version": "d2567dc88370e62e93401a46a9bc8594"
};