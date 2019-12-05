#!/usr/bin/env ruby

require 'json'
filename = ARGV.first
data = JSON.parse(File.read(filename))

puts "data = #{data}"
