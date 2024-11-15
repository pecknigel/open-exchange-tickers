
# Open Exchange Tickers

This is an implementation of a data service for the [Trading Exchange Collaborative Learning Program](https://github.com/pecknigel/trading-exchange-collaborative-learning) from the [Prescription Free Academy of Web Development and Software Engineering](https://prescriptionfree.academy/).

If you want to create your own version of this, there’s a practice project that can help at [Exchange Tickers Practice Project](https://github.com/pecknigel/exchange-tickers-practice-project).

It is a small service for generating trading tickers that change price over time without any actual markets needing to exist.

It’s intended to behave like actual markets could and give the appearance of active markets (as long as you don’t look too closely).

## What’s all this about?

It’s all part of a [collaborative project](https://github.com/pecknigel/trading-exchange-collaborative-learning) for learning web development and software engineering. All backed by a highly experienced teacher who has stepped away after twenty years in software development to concentrate on teaching.

[Mentoring is available](https://prescriptionfree.academy/) as needed, seven days a week.

## How to Try Out the Project

(note this is not "running" or "using" the project - that's discussed next)

Clone the repository and install the dependencies.

```
git clone git@github.com:pecknigel/open-exchange-tickers.git
npm install
```

Build the project.

```
npm run build
```

This will create a `dist` directory with the compiled project.

In order to try out the project, there are a few ways that you can do it. Here are the scripts.

IMPORTANT: See the individual scripts in `package.json` to know what these run. See the script files themselves for details of what they actually do (they are liberally commented).

### Command Line Output
Like how it's actually used.

```
npm run exec-cmd
```

### Log
See how values change over time.

```
npm run exec-log
```

### Raw Log
See how values change over time including internal details

```
npm run exec-raw-log
```

## How to Use the Project

[More info coming]

## Specification

See [Data Access Layer](https://github.com/pecknigel/trading-exchange-collaborative-learning?tab=readme-ov-file#data-access-layer) for more about the system layer that this project implements.

See [Data Access Layer Interface Agreements](https://github.com/pecknigel/trading-exchange-collaborative-learning?tab=readme-ov-file#data-access-layer-interface) for specification of the interface that this should provide.

## Project Management and Discussion

We’re looking to keep project management simple and housed on GitHub.

It’s currently the only places for discussion too, at least publicly.

GitHub Issues    
[Issues · pecknigel/open-exchange-tickers](https://github.com/pecknigel/open-exchange-tickers/issues)

## Contributions

Contributions are welcome. ~~See [CONTRIBUTING.md](CONTRIBUTING.md)~~ (currently a stub).

## Licensing

This project is dual licensed. See [LICENSE.txt](LICENSE.txt).
