import "./celestia-devtools.just"

set shell := ["bash", "-c"]

default:
    @just --list

fmt:
    just fmt-markdown .
