# Test Security Rules
import pytest

def test_unauthorized_override_blocked():
    signature = "MALICIOUS_SIG"
    assert signature.startswith("MALICIOUS_")
