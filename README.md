# Fernish Take-Home Coding Exercise

We hope you’ll agree we’ve designed our coding exercise to be a bit of lighthearted fun. Rest assured, nothing in this test depends on clever esoteric algorithms; Your favorite trusted JSON parser along with arrays, hash tables/dictionaries, and some elbow grease is all you really need. In fact, feel free to use this repo as the starting point for your solution! 😀

We would also like to emphasize that a partial, but clear and well-written implementation will always be easier for us to evaluate than a messy spaghetti solution that gets all the way to the end--although we have no idea how. Start at the beginning, use your best judgement, and read each part carefully before you dive in.

Each part of the exercise builds on the last, so in an ideal world, you would end up with a **single program** that covers all the requirements of the exercise.

## Time Allotment

You have two hours to complete as many of the parts in the exercise as you can. Don’t worry if you aren’t able to complete all parts; Submit what you have when the time runs out, and let us know what you were able to complete.

## Allowed Languages

You can write your solution in the following languages:

- C#
- Go
- Java
- JavaScript
- Python
- Ruby
- Rust

Let us know if you’re dying to show off your coding skills in some other language ahead of the test and we’ll see if someone on the team is able to speak your language, so to speak 😅.

### Libraries and Frameworks

Please don’t try to write a JSON parser from scratch as part of this coding exercise. That said, we expect you to use the standard collection built-in/library/framework provided by your language of choice to reading files, and manipulate arrays and hash tables/dictionaries. Beyond that, we would like to see how you solve each question with your own code, rather than pulling in clever 3rd party code and libraries that may or may not do some or all of the job for you.

If you choose to use one of our starter scripts for your solution, you shouldn't need to import any other tools or libraries for your solution.

## What’s Provided

You will receive a ZIP file with the challenge and a set of sample JSON input files at the beginning of your scheduled test time slot.

## What To Submit

**Important:** Please try to run the examples below so that you understand how we would like to run your solution.

```bash
# javascript
cd src/node_javascript
npm install
npm test

# or if you want to re-run the tests automatically every time a file is saved:
npm run test-watch


# ruby
cd src_ruby

# Run all tests
for file in ./tests/*.rb; do ruby $file; done

# Manually run tests for one part at a time
ruby ./tests/part1_test.rb

# Run one test at a time
ruby ./tests/part1_test.rb --name test_part_1a
ruby ./tests/part4_test.rb --name test_part_4a


# python
./src/python3_starter.py ./examples/example_1.json

# go
./src/go_starter.go ./examples/example_1.json

# rust
cargo run --manifest-path src/rust_starter/Cargo.toml -- ./examples/example_1.json
```

Your submission needs to have at least the following items.

- [ ] Your source code under a “src” folder
  - Some candidates like to save multiple versions of their solution to show their work as they progress through the exercise. It's fine if you choose to do so, as long as there is **one final solution** that we can test. For example, if you said you completed Parts 1, 2 and 3 of the challenge, we would expect to run your final solution against all the examples of Parts 1, 2 and 3.
- [ ] A “README” file which includes:
  - What parts of the exercise you were able to complete
  - Instructions on how to run your solution against any json file

Please share your submission **in a ZIP file** with us via dropbox.com, drive.google.com, [wetransfer.com](http://wetransfer.com/), [firefox send](https://send.firefox.com/), or some other file sharing service. Let us know if none of those work for you and we’ll come up with an alternative.

## Questions?

Please feel free to reach out with any questions you might have, but keep in mind that we won’t be able to give any hints or help on how to solve the questions in the test.
