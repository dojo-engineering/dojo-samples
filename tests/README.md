## Test Code Samples

### Python

Setup:

```
pip3 install pytest
pip3 install pytest-html
```

Run all sample python scripts:

```
cd tests
pytest
```

Generate HTML report:

```
cd tests
pytest --html=report.html --self-contained-html
open report.html
```

Run a single script:

```
cd tests
pytest pytest payment-intent/test_payment_intent_auto.py
```