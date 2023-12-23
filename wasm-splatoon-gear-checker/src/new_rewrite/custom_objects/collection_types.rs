use std::collections::VecDeque;
use std::iter::FromIterator;
use std::ops::{Index, Sub, Deref, DerefMut};
use std::slice::SliceIndex;
use arrayvec::ArrayVec;
use crate::new_rewrite::custom_objects::ability_types::{SubAbility, Ticket};

use enum_vec::smallvec_u32::EnumVec as SmallEnumVec;
use enumset::EnumSet;
use tsify::declare;

pub type AbilityCombo = SmallEnumVec<SubAbility>;

#[declare]
pub type AbilityCombo_key = Vec<SubAbility>;
pub type TicketCombo = SmallEnumVec<Ticket>;

pub type TicketSet = EnumSet<Ticket>;
pub type AbilitySet = EnumSet<SubAbility>;
pub type TicketSetCombo = ArrayVec<TicketSet, 3>;

pub type TicketSetCombo_N = Vec<TicketSet>;

/* #[derive(Hash, Clone)]
#[repr(transparent)]
pub struct AbilityCombo(SmallEnumVec<SubAbility>);

impl Deref for AbilityCombo{
    type Target = SmallEnumVec<SubAbility>;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl DerefMut for AbilityCombo{
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.0
    }
}

impl From<SmallEnumVec<SubAbility>> for AbilityCombo{
    fn from(value: SmallEnumVec<SubAbility>) -> Self {
        AbilityCombo(value)
    }
}

impl Into<Vec<SubAbility>> for AbilityCombo{
    fn into(self) -> Vec<SubAbility> {
        return self.0.into()
    }
}

impl FromIterator<SubAbility> for AbilityCombo{
    fn from_iter<T: IntoIterator<Item = SubAbility>>(iter: T) -> Self {
        Self(<Self as Deref>::Target::from_iter(iter))
    }
} */



