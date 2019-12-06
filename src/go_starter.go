//usr/bin/env go run "$0" "$@"; exit "$?"

package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

func main() {
	jsonFile, _ := os.Open(os.Args[1])

	byteValue, _ := ioutil.ReadAll(jsonFile)

	var jsonData map[string]interface{}
	json.Unmarshal([]byte(byteValue), &jsonData)

	fmt.Println(jsonData)
}
