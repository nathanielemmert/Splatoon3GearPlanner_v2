#[derive(Hash, Eq, PartialEq, Ord, PartialOrd, Debug)]
#[repr(transparent)]
pub struct AbilityCombo(
    VecDeque<SubAbility>
);

impl AbilityCombo{

    pub fn new()->AbilityCombo{
        return AbilityCombo(VecDeque::new());
    }
    pub fn is_empty(&self)->bool{
        return self.0.is_empty();
    }
    pub fn pop_first(&mut self) -> Option<SubAbility> {
        return self.0.pop_front();
    }
    pub fn push_last(&mut self, value:SubAbility){
        self.0.push_back(value);
    }
    pub fn push_first(&mut self, value:SubAbility){
        self.0.push_front(value);
    }
}

impl IntoIterator for AbilityCombo{
    type Item = SubAbility;
    type IntoIter = std::collections::vec_deque::IntoIter<Self::Item>;

    fn into_iter(self) -> Self::IntoIter {
        return self.0.into_iter();
    }
}


impl<T> From<T> for AbilityCombo
    where T:Into<VecDeque<SubAbility>>{
    fn from(value: T) -> Self {

        return AbilityCombo(value.into());
    }
}