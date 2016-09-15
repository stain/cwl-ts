export default JSON.parse(`{
    "successCodes": [],
    "sbg:toolkitVersion": "2.4.0",
    "requirements": [
        {
            "class": "ExpressionEngineRequirement",
            "requirements": [
                {
                    "class": "DockerRequirement",
                    "dockerPull": "rabix/js-engine"
                }
            ],
            "id": "#cwl-js-engine"
        }
    ],
    "sbg:image_url": null,
    "arguments": [
        {
            "position": 3,
            "valueFrom": {
                "class": "Expression",
                "engine": "#cwl-js-engine",
                "script": "{\\n filepath = $job.inputs.input_bam_file.path\\n\\n file_path_sep = filepath.split(\\"/\\")\\n filename = file_path_sep[file_path_sep.length-1]\\n\\n file_dot_sep = filename.split(\\".\\");\\n base_name = file_dot_sep[file_dot_sep.length-2];\\n\\n\\n return base_name + \\".splitted\\"\\n}"
            },
            "separate": true,
            "prefix": "-stub"
        }
    ],
    "sbg:categories": [
        "SAM/BAM-Processing"
    ],
    "sbg:modifiedOn": 1456304887,
    "sbg:cmdPreview": "/opt/bamtools/bin/bamtools split -in input/input_bam.ext -refPrefix refp -tagPrefix tagp -stub input_bam.splitted -mapped -paired -reference -tag tag input/input_bam.ext",
    "sbg:createdBy": "admin",
    "sbg:validationErrors": [],
    "sbg:latestRevision": 1,
    "hints": [
        {
            "class": "DockerRequirement",
            "dockerPull": "images.sbgenomics.com/markop/bamtools:2.4.0",
            "dockerImageId": "f808163d4cd3"
        },
        {
            "value": 1,
            "class": "sbg:CPURequirement"
        },
        {
            "value": 1000,
            "class": "sbg:MemRequirement"
        }
    ],
    "stdout": "",
    "sbg:links": [
        {
            "id": "https://github.com/pezmaster31/bamtools",
            "label": "Homepage"
        },
        {
            "id": "https://github.com/pezmaster31/bamtools/wiki",
            "label": "Wiki"
        }
    ],
    "sbg:job": {
        "allocatedResources": {
            "cpu": 1,
            "mem": 1000
        },
        "inputs": {
            "ref_prefix": "refp",
            "paired": true,
            "mapped": true,
            "tag": "tag",
            "input_bam_file": {
                "class": "File",
                "secondaryFiles": [],
                "size": 0,
                "path": "input/input_bam.ext"
            },
            "tag_prefix": "tagp",
            "reference": true
        }
    },
    "inputs": [
        {
            "inputBinding": {
                "position": 0,
                "sbg:cmdInclude": true,
                "separate": true,
                "prefix": "-in"
            },
            "sbg:category": "Input & Output",
            "sbg:fileTypes": "BAM",
            "label": "Input BAM file",
            "description": "The input BAM file.",
            "type": [
                "File"
            ],
            "id": "#input_bam_file"
        },
        {
            "inputBinding": {
                "position": 1,
                "sbg:cmdInclude": true,
                "separate": true,
                "prefix": "-refPrefix"
            },
            "sbg:category": "Input & Output",
            "label": "Reference prefix",
            "description": "Custom prefix for splitting by references. Currently files end with REF_<refName>.bam. This option allows you to replace \\"REF_\\" with a prefix of your choosing.",
            "type": [
                "null",
                "string"
            ],
            "id": "#ref_prefix"
        },
        {
            "inputBinding": {
                "position": 2,
                "sbg:cmdInclude": true,
                "separate": true,
                "prefix": "-tagPrefix"
            },
            "sbg:category": "Input & Output",
            "label": "Tag prefix",
            "description": "Custom prefix for splitting by tags. Current files end with TAG_<tagname>_<tagvalue>.bam. This option allows you to replace \\"TAG_\\" with a prefix of your choosing.",
            "type": [
                "null",
                "string"
            ],
            "id": "#tag_prefix"
        },
        {
            "inputBinding": {
                "position": 4,
                "sbg:cmdInclude": true,
                "separate": false,
                "prefix": "-mapped"
            },
            "sbg:category": "Split Options",
            "label": "Mapped/unmapped split",
            "description": "Split mapped/unmapped alignments.",
            "type": [
                "null",
                "boolean"
            ],
            "id": "#mapped"
        },
        {
            "inputBinding": {
                "position": 5,
                "sbg:cmdInclude": true,
                "separate": false,
                "prefix": "-paired"
            },
            "sbg:category": "Split Options",
            "label": "Paired-end/single-end split",
            "description": "Split single-end/paired-end alignments.",
            "type": [
                "null",
                "boolean"
            ],
            "id": "#paired"
        },
        {
            "inputBinding": {
                "position": 7,
                "sbg:cmdInclude": true,
                "separate": true,
                "prefix": "-tag"
            },
            "sbg:category": "Split Options",
            "label": "Tag split",
            "description": "Splits alignments based on all values of TAG encountered (i.e. -tag RG creates a BAM file for each read group in original BAM file).",
            "type": [
                "null",
                "string"
            ],
            "id": "#tag"
        },
        {
            "inputBinding": {
                "position": 6,
                "sbg:cmdInclude": true,
                "separate": false,
                "prefix": "-reference"
            },
            "sbg:category": "Split Options",
            "label": "Reference split",
            "description": "Split alignments by reference.",
            "type": [
                "null",
                "boolean"
            ],
            "id": "#reference"
        }
    ],
    "sbg:license": "The MIT License",
    "sbg:modifiedBy": "admin",
    "sbg:contributors": [
        "admin"
    ],
    "sbg:id": "admin/sbg-public-data/bamtools-split-2-4-0/1",
    "sbg:toolAuthor": "Derek Barnett, Erik Garrison, Gabor Marth, and Michael Stromberg",
    "label": "BamTools Split",
    "outputs": [
        {
            "sbg:fileTypes": "BAM",
            "outputBinding": {
                "sbg:inheritMetadataFrom": "#input_bam",
                "sbg:metadata": {},
                "glob": {
                    "class": "Expression",
                    "engine": "#cwl-js-engine",
                    "script": "{\\n filepath = $job.inputs.input_bam_file.path\\n\\n file_path_sep = filepath.split(\\"/\\")\\n filename = file_path_sep[file_path_sep.length-1]\\n\\n file_dot_sep = filename.split(\\".\\");\\n base_name = file_dot_sep[file_dot_sep.length-2];\\n\\n\\n return base_name + \\".splitted\\" + \\".*.bam\\";\\n}"
                }
            },
            "label": "Output BAM files",
            "description": "Output BAM files.",
            "type": [
                {
                    "items": "File",
                    "type": "array"
                }
            ],
            "id": "#output_bam_files"
        }
    ],
    "description": "BamTools Split splits a BAM file based on a user-specified property. It creates a new BAM output file for each value found.",
    "sbg:createdOn": 1456304887,
    "sbg:revision": 1,
    "id": "https://staging-api.sbgenomics.com/v2/apps/admin/sbg-public-data/bamtools-split-2-4-0/1/raw/",
    "class": "CommandLineTool",
    "stdin": "",
    "sbg:homepage": "https://github.com/pezmaster31/bamtools/wiki",
    "sbg:revisionsInfo": [
        {
            "sbg:modifiedBy": "admin",
            "sbg:revisionNotes": null,
            "sbg:revision": 0,
            "sbg:modifiedOn": 1456304887
        },
        {
            "sbg:modifiedBy": "admin",
            "sbg:revisionNotes": null,
            "sbg:revision": 1,
            "sbg:modifiedOn": 1456304887
        }
    ],
    "sbg:project": "admin/sbg-public-data",
    "baseCommand": [
        "/opt/bamtools/bin/bamtools",
        "split"
    ],
    "sbg:sbgMaintained": false,
    "sbg:toolkit": "BamTools",
    "temporaryFailCodes": []
}`);